"use strict";

const series = window.LL_SERIES || [];
const characters = window.LL_CHARACTERS || [];
const drawIds = new Set([
  "muse-kotori", "muse-maki", "muse-eli", "muse-nico",
  "aqours-you", "aqours-riko", "aqours-yoshiko", "aqours-dia",
  "niji-ayumu", "niji-setsuna", "niji-shioriko", "niji-ai", "niji-lanzhu",
  "hasu-rurino"
]);
const drawCharacters = characters.filter(({ id }) => drawIds.has(id));
const $ = (id) => document.getElementById(id);
const q = (selector) => document.querySelector(selector);
const HOLD_SECONDS = 0.5;
const HOLD_IDLE_COPY = "（按住 0.5 秒开签）";

const homeScreen = $("homeScreen");
const resultScreen = $("resultScreen");
const posterStage = $("posterStage");
const posterStack = $("posterStack");
const posterCaption = $("posterCaption");
const seriesIndex = $("seriesIndex");
const drawTicket = $("drawTicket");
const holdHint = $("holdHint");
const cnInput = $("cnInput");
const soundToggle = $("soundToggle");
const previewAudio = $("previewAudio");
const representativeAudio = $("representativeAudio");
const audioStatus = $("audioStatus");
const audioProgress = $("audioProgress");
const resultAudioProgress = $("resultAudioProgress");
const resultAudioToggle = $("resultAudioToggle");
const resultAudioStatus = $("resultAudioStatus");
const resultTrackTitle = $("resultTrackTitle");
const stageFlash = $("stageFlash");
const liveRegion = $("liveRegion");
const catalogScreen = $("catalogScreen");
const catalogTabs = $("catalogTabs");
const catalogGrid = $("catalogGrid");
const coverWordmark = document.querySelector(".cover-wordmark");
const editionTitle = document.querySelector(".edition h1");
const brandLink = document.querySelector(".brand");

const gsap = window.gsap;
const Observer = window.Observer;

if (!gsap || !Observer) {
  throw new Error("GSAP runtime failed to load.");
}

gsap.registerPlugin(Observer);
gsap.defaults({ ease: "power3.out" });

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const posterCards = [];
let uiState = "idle";
let activeSeriesIndex = 0;
let catalogSeriesIndex = 0;
let selectedCharacter = null;
let currentResultCharacter = null;
let holdTimeline = null;
let revealTimeline = null;
let soundEnabled = false;
let audioStopCall = null;
let pendingRedraw = false;
let pendingCharacter = null;
let lastCharacterId = "";
let pointerStart = null;

function optimizedAssetPath(path) {
  if (!path) return "";
  if (path.startsWith("data/icon/")) {
    return path
      .replace("data/icon/", "data/icon_webp/")
      .replace(/\.(png|jpe?g)$/i, ".webp");
  }
  return path;
}

function tint(hex, amount = 0.9) {
  const value = hex?.replace("#", "");
  if (!value || !/^[0-9a-f]{6}$/i.test(value)) return "#f7f8ff";
  const channels = [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16));
  return `rgb(${channels.map((channel) => Math.round(channel + (255 - channel) * amount)).join(" ")})`;
}

function wrappedOffset(index, activeIndex) {
  const count = series.length;
  let offset = index - activeIndex;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

function setAccent(item, animate = true) {
  const color = item.color || item.seriesColor || "#ff1493";
  const color2 = item.color2 || item.seriesColor2 || color;
  document.documentElement.style.setProperty("--accent", color);
  document.documentElement.style.setProperty("--accent-soft", color2);
  gsap.to([document.documentElement, document.body], {
    backgroundColor: tint(color),
    duration: animate && !reducedMotion ? 0.55 : 0,
    overwrite: "auto"
  });
}

function posterVars(index, activeIndex) {
  const offset = wrappedOffset(index, activeIndex);
  const distance = Math.abs(offset);
  return {
    xPercent: offset === 0 ? 0 : Math.sign(offset) * (88 + (distance - 1) * 22),
    scale: 1 - Math.min(distance, 3) * 0.035,
    rotationY: offset * -5,
    autoAlpha: distance > 2 ? 0 : distance === 0 ? 1 : 0.72,
    zIndex: 10 - distance
  };
}

function renderPosters() {
  const template = $("posterTemplate");
  posterStack.innerHTML = "";

  series.forEach((item) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    card.dataset.seriesKey = item.key;
    image.src = item.cover;
    image.alt = `${item.label} 官方企划海报`;
    image.style.setProperty("--poster-fit", item.posterFit);
    image.style.setProperty("--poster-position", item.posterPosition);
    card.style.setProperty("--poster-fit", item.posterFit);
    card.style.setProperty("--poster-position", item.posterPosition);
    posterStack.appendChild(card);
    posterCards.push(card);
  });
}

function renderSeriesButtons(container, onSelect) {
  const template = $("seriesButtonTemplate");
  container.innerHTML = "";

  series.forEach((item, index) => {
    const button = template.content.firstElementChild.cloneNode(true);
    button.dataset.seriesIndex = String(index);
    button.querySelector(".series-number").textContent = String(index + 1).padStart(2, "0");
    button.querySelector(".series-name").textContent = item.label;
    button.setAttribute("aria-label", `切换到 ${item.label}`);
    button.addEventListener("click", () => onSelect(index));
    container.appendChild(button);
  });
}

function updateSeriesButtons(container, currentIndex) {
  container.querySelectorAll(".series-button").forEach((button, index) => {
    button.setAttribute("aria-current", index === currentIndex ? "true" : "false");
  });
}

function setAudioStatus(text) {
  audioStatus.textContent = text;
}

function setSoundEnabled(enabled) {
  soundEnabled = enabled;
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.textContent = enabled ? "SOUND ON" : "SOUND OFF";
  liveRegion.textContent = enabled ? "声音已开启" : "声音已关闭";
}

function clearPlayingPosters() {
  posterCards.forEach((card) => card.classList.remove("is-playing"));
}

function clearAudioProgress() {
  gsap.set([audioProgress, resultAudioProgress], { scaleX: 0 });
}

function stopAllAudio(reset = true) {
  if (audioStopCall) {
    audioStopCall.kill();
    audioStopCall = null;
  }
  [previewAudio, representativeAudio].forEach((audio) => {
    audio.pause();
    if (reset) audio.currentTime = 0;
  });
  clearPlayingPosters();
  clearAudioProgress();
  resultAudioToggle.textContent = "播放";
}

function switchSeries(nextIndex, animate = true) {
  if (uiState !== "idle" && uiState !== "holding") return;
  const normalized = (nextIndex + series.length) % series.length;
  const previous = activeSeriesIndex;
  const direction = normalized === previous ? 0 : wrappedOffset(normalized, previous) > 0 ? 1 : -1;
  activeSeriesIndex = normalized;
  const item = series[normalized];

  if (previewAudio.dataset.seriesKey && previewAudio.dataset.seriesKey !== item.key) {
    stopAllAudio();
    setAudioStatus("点击海报播放团歌");
  }

  setAccent(item, animate);
  posterCaption.textContent = `${item.label}  ${item.jp}`;
  updateSeriesButtons(seriesIndex, normalized);

  if (!animate || reducedMotion) {
    posterCards.forEach((card, index) => gsap.set(card, posterVars(index, normalized)));
    return;
  }

  gsap.timeline({ defaults: { overwrite: "auto" } })
    .to(posterCards, {
      duration: 0.5,
      xPercent: (index) => posterVars(index, normalized).xPercent,
      scale: (index) => posterVars(index, normalized).scale,
      rotationY: (index) => posterVars(index, normalized).rotationY,
      autoAlpha: (index) => posterVars(index, normalized).autoAlpha,
      zIndex: (index) => posterVars(index, normalized).zIndex,
      stagger: { each: 0.022, from: direction > 0 ? "end" : "start" },
      ease: "power3.inOut"
    }, 0)
    .fromTo([coverWordmark, editionTitle],
      { x: direction * 22, skewX: direction * -5, autoAlpha: 0.45 },
      { x: 0, skewX: 0, autoAlpha: 1, duration: 0.48, clearProps: "transform,opacity" },
      0.04
    )
    .fromTo(".series-button[aria-current='true']",
      { x: direction * 10 },
      { x: 0, duration: 0.38, clearProps: "transform" },
      0.08
    );
}

async function playSeriesAudio() {
  if (uiState !== "idle") return;
  const item = series[activeSeriesIndex];
  const source = item.coverAudio || item.previewAudio;
  if (!source) return;

  if (!soundEnabled) setSoundEnabled(true);
  const isSame = previewAudio.dataset.seriesKey === item.key && previewAudio.src.includes(source);

  if (isSame && !previewAudio.paused) {
    previewAudio.pause();
    clearPlayingPosters();
    setAudioStatus(`已暂停：${item.label}《${item.coverSong}》`);
    return;
  }

  if (isSame && previewAudio.currentTime > 0) {
    try {
      await previewAudio.play();
      posterCards[activeSeriesIndex].classList.add("is-playing");
      setAudioStatus(`正在播放：${item.label}《${item.coverSong}》`);
    } catch {
      setAudioStatus("点击海报再次播放");
    }
    return;
  }

  stopAllAudio();
  previewAudio.dataset.seriesKey = item.key;
  previewAudio.src = source;
  previewAudio.currentTime = 0;
  previewAudio.load();

  try {
    await previewAudio.play();
    posterCards[activeSeriesIndex].classList.add("is-playing");
    setAudioStatus(`正在播放：${item.label}《${item.coverSong}》`);
  } catch {
    setAudioStatus("团歌暂时无法播放");
  }
}

function resultSources(character) {
  const item = series.find((entry) => entry.key === character.seriesKey);
  const sources = [
    character.representative?.audio && {
      audio: character.representative.audio,
      title: character.representative.display || character.representative.title
    },
    item?.coverAudio && { audio: item.coverAudio, title: `${item.label}《${item.coverSong}》` },
    item?.previewAudio && { audio: item.previewAudio, title: `${item.label} 试听片段` }
  ].filter(Boolean);
  return sources.filter((entry, index) => sources.findIndex((item) => item.audio === entry.audio) === index);
}

async function playResultAudio(character = currentResultCharacter, autoStop = false) {
  if (!character || !soundEnabled) return;
  stopAllAudio();
  const sources = resultSources(character);

  for (const source of sources) {
    representativeAudio.src = source.audio;
    representativeAudio.dataset.title = source.title;
    representativeAudio.currentTime = 0;
    representativeAudio.load();
    try {
      await representativeAudio.play();
      resultTrackTitle.textContent = source.title;
      resultAudioStatus.textContent = "正在播放";
      resultAudioToggle.textContent = "暂停";
      if (autoStop) audioStopCall = gsap.delayedCall(10, () => stopAllAudio(false));
      return;
    } catch (error) {
      if (error?.name === "NotAllowedError") {
        resultAudioStatus.textContent = "点击播放";
        return;
      }
    }
  }

  resultAudioStatus.textContent = "曲目暂时无法播放";
  resultAudioToggle.textContent = "播放";
}

async function toggleResultAudio() {
  if (!currentResultCharacter) return;
  if (!soundEnabled) setSoundEnabled(true);

  if (!representativeAudio.paused) {
    representativeAudio.pause();
    resultAudioStatus.textContent = "已暂停";
    resultAudioToggle.textContent = "继续";
    return;
  }

  if (representativeAudio.src && representativeAudio.currentTime > 0) {
    try {
      await representativeAudio.play();
      resultAudioStatus.textContent = "正在播放";
      resultAudioToggle.textContent = "暂停";
      return;
    } catch {
      resultAudioStatus.textContent = "曲目暂时无法播放";
    }
  }

  await playResultAudio(currentResultCharacter);
}

function toggleSound() {
  setSoundEnabled(!soundEnabled);
  if (!soundEnabled) {
    stopAllAudio();
    setAudioStatus("点击海报播放团歌");
    resultAudioStatus.textContent = "声音已关闭";
  } else {
    setAudioStatus("点击海报播放团歌");
    resultAudioStatus.textContent = "点击播放";
  }
}

function pickRandomCharacter() {
  if (!drawCharacters.length) return null;
  const pool = drawCharacters.length > 1
    ? drawCharacters.filter((character) => character.id !== lastCharacterId)
    : drawCharacters;
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  const character = pool[values[0] % pool.length];
  lastCharacterId = character.id;
  return character;
}

function fillResult(character) {
  const item = series.find((entry) => entry.key === character.seriesKey);
  const art = $("resultArt");
  const poem = $("resultPoem");
  const cn = cnInput.value.trim() || "GUEST";
  const usesCurtainLayout = true;

  currentResultCharacter = character;
  resultScreen.classList.toggle("is-reference-proof", usesCurtainLayout);
  document.body.classList.toggle("is-reference-proof", usesCurtainLayout);
  $("resultTicket").style.setProperty("--result-gold", character.color);
  $("resultSeries").textContent = item.label;
  $("resultSlipNo").textContent = character.slipNo;
  $("resultCn").textContent = `CN ${cn}`;
  $("fortuneRank").textContent = character.fortuneRank;
  $("resultKeyword").textContent = character.focus;
  $("resultName").textContent = character.nameCn;
  $("resultName").style.setProperty("--result-name-size", `${Math.min(7, 42 / [...character.nameCn].length)}cqw`);
  $("resultJp").textContent = usesCurtainLayout ? character.roman : `${character.nameJp} / ${character.roman}`;
  $("returnHome").textContent = usesCurtainLayout ? "← 返回" : "← 返回首页";
  $("againBtn").textContent = usesCurtainLayout ? "再抽一次" : "再来一签";
  $("resultOracle").textContent = character.oracle;
  $("resultWish").textContent = character.wishFortune;
  $("resultPeople").textContent = character.peopleFortune;
  $("resultTravel").textContent = character.travelFortune;
  $("resultStudy").textContent = character.studyFortune;
  $("todayAction").textContent = character.todayAction;
  $("resultCv").textContent = character.cv;
  $("resultTraits").textContent = character.traits;
  $("resultSong").textContent = character.representative?.display || character.song;
  $("resultTrivia").textContent = character.trivia;

  poem.replaceChildren(...character.poemLines.map((line) => {
    const span = document.createElement("span");
    span.textContent = line;
    return span;
  }));

  const primaryTrack = resultSources(character)[0];
  resultTrackTitle.textContent = primaryTrack?.title || "暂无曲目";
  resultAudioStatus.textContent = soundEnabled ? "点击播放" : "声音已关闭";
  resultAudioToggle.textContent = "播放";

  delete art.dataset.fallback;
  art.src = optimizedAssetPath(character.avatar);
  art.alt = `${character.nameCn} 角色卡面`;
  art.style.objectFit = character.resultPortraitFit;
  art.style.objectPosition = character.resultPortraitPosition;
  art.style.transformOrigin = character.resultPortraitPosition;
  art.style.setProperty("--result-portrait-scale", character.resultPortraitScale);
  art.onerror = () => {
    if (art.dataset.fallback) return;
    art.dataset.fallback = "true";
    art.src = character.avatar;
  };
  setAccent(item);
}

function clearRevealStyles() {
  gsap.set([
    $("resultTicket"),
    $("resultSeries"),
    q(".result-title"),
    ...document.querySelectorAll(".omikuji-curtain"),
    q(".portrait-column"),
    q(".character-art-wrap"),
    q(".result-copy"),
    $("fortuneRank"),
    $("resultName"),
    q(".poem-section"),
    q(".oracle-section"),
    q(".fortune-grid"),
    ...q(".fortune-grid").children,
    q(".today-action"),
    q(".result-audio"),
    q(".result-details"),
    q(".result-actions"),
    stageFlash
  ], { clearProps: "all" });
}

function resetResultToHome() {
  document.body.classList.remove("is-result", "is-reference-proof", "is-catalog-open");
  resultScreen.classList.remove("is-reference-proof");
  clearRevealStyles();
  gsap.set(resultScreen, { autoAlpha: 0, pointerEvents: "none" });
  resultScreen.setAttribute("aria-hidden", "true");
  homeScreen.removeAttribute("aria-hidden");
  gsap.set(homeScreen, { autoAlpha: 1, pointerEvents: "auto" });
  switchSeries(activeSeriesIndex, false);
}

function showReducedMotionResult(character) {
  const targetIndex = series.findIndex((item) => item.key === character.seriesKey);
  activeSeriesIndex = targetIndex;
  fillResult(character);
  document.body.classList.add("is-result");
  switchSeries(targetIndex, false);
  resultScreen.setAttribute("aria-hidden", "false");
  gsap.set(homeScreen, { autoAlpha: 0, pointerEvents: "none" });
  gsap.set(resultScreen, { autoAlpha: 1, pointerEvents: "auto" });
  homeScreen.setAttribute("aria-hidden", "true");
  uiState = "result";
  holdHint.textContent = "已开签";
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

function buildRevealTimeline(character) {
  const targetIndex = series.findIndex((item) => item.key === character.seriesKey);
  activeSeriesIndex = targetIndex;
  fillResult(character);
  updateSeriesButtons(seriesIndex, targetIndex);

  if (reducedMotion) {
    showReducedMotionResult(character);
    return;
  }

  posterCards.forEach((card, index) => gsap.set(card, posterVars(index, targetIndex)));
  const selectedCard = posterCards[targetIndex];
  const otherCards = posterCards.filter((card) => card !== selectedCard);
  resultScreen.setAttribute("aria-hidden", "false");
  gsap.set(resultScreen, { visibility: "visible", opacity: 0, pointerEvents: "none" });

  revealTimeline = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.inOut" },
    onStart() {
      document.body.classList.add("is-result");
      uiState = "revealing";
      drawTicket.disabled = true;
    },
    onComplete() {
      uiState = "result";
      drawTicket.disabled = false;
      homeScreen.setAttribute("aria-hidden", "true");
      gsap.set(resultScreen, { pointerEvents: "auto" });
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
      liveRegion.textContent = `抽到 ${character.nameCn}，大吉`;
    },
    onReverseComplete() {
      resetResultToHome();
      drawTicket.disabled = false;
      drawTicket.classList.remove("is-holding");
      gsap.set(drawTicket, { scale: 1, "--hold-progress": 0 });
      holdHint.textContent = HOLD_IDLE_COPY;
      uiState = "idle";
      selectedCharacter = null;

      if (pendingRedraw || pendingCharacter) {
        const nextCharacter = pendingCharacter;
        pendingRedraw = false;
        pendingCharacter = null;
        startHold(null, HOLD_SECONDS, nextCharacter);
      }
    }
  });

  revealTimeline
    .addLabel("sweep", 0)
    .to(otherCards, {
      xPercent: (index) => -120 + index * 48,
      rotationY: (index) => 16 - index * 6,
      autoAlpha: 0.82,
      scale: 0.94,
      duration: 0.35,
      stagger: 0.025
    }, "sweep")
    .addLabel("lock", 0.3)
    .to(otherCards, {
      xPercent: (index, card) => posterCards.indexOf(card) < targetIndex ? -130 : 130,
      autoAlpha: 0,
      duration: 0.4,
      stagger: 0.02
    }, "lock")
    .addLabel("stage", 0.64)
    .to(selectedCard, {
      scale: 1.08,
      autoAlpha: 0,
      duration: 0.42
    }, "stage")
    .to(homeScreen, { autoAlpha: 0, pointerEvents: "none", duration: 0.42 }, "stage")
    .fromTo(stageFlash,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 0.9, scaleX: 1, duration: 0.2, ease: "power2.in" },
      "stage+=0.08"
    )
    .to(stageFlash, { autoAlpha: 0, duration: 0.28, ease: "power2.out" }, "stage+=0.28")
    .to(resultScreen, { autoAlpha: 1, duration: 0.36 }, "stage+=0.28")
    .addLabel("curtain", 1.05)
    .from($("resultTicket"), {
      autoAlpha: 0,
      duration: 0.28
    }, "curtain")
    .fromTo(q(".omikuji-curtain-left"), {
      xPercent: 68,
      rotation: -2
    }, {
      xPercent: 0,
      rotation: 0,
      duration: 0.58,
      ease: "power4.out"
    }, "curtain")
    .fromTo(q(".omikuji-curtain-right"), {
      xPercent: -68,
      rotation: 2
    }, {
      xPercent: 0,
      rotation: 0,
      duration: 0.58,
      ease: "power4.out"
    }, "curtain")
    .from(q(".result-title"), {
      y: -22,
      autoAlpha: 0,
      duration: 0.4
    }, "curtain+=0.12")
    .addLabel("portrait", 1.32)
    .from(q(".portrait-column"), {
      y: 52,
      scale: 0.95,
      autoAlpha: 0,
      duration: 0.52,
      ease: "back.out(1.08)"
    }, "portrait")
    .from(q(".result-copy"), {
      y: 18,
      autoAlpha: 0,
      duration: 0.34
    }, "portrait+=0.24")
    .from(q(".poem-section"), {
      y: 18,
      autoAlpha: 0,
      duration: 0.38
    }, "portrait+=0.2")
    .addLabel("oracle", 1.72)
    .from([q(".oracle-section"), q(".today-action")], {
      y: 20,
      autoAlpha: 0,
      duration: 0.36,
      stagger: 0.08,
      ease: "power3.out"
    }, "oracle")
    .addLabel("fortune", 1.94)
    .from(q(".fortune-grid").children, {
      y: 18,
      autoAlpha: 0,
      duration: 0.32,
      stagger: 0.055,
      ease: "power3.out"
    }, "fortune")
    .addLabel("controls", 2.18)
    .from([q(".result-audio"), q(".result-details"), q(".result-actions")], {
      y: 18,
      autoAlpha: 0,
      duration: 0.34,
      stagger: 0.06,
      ease: "power3.out"
    }, "controls");

  revealTimeline.play(0);
}

function beginReveal(forcedCharacter = null) {
  if (uiState !== "holding" && uiState !== "idle") return;
  selectedCharacter = forcedCharacter || selectedCharacter || pickRandomCharacter();
  if (!selectedCharacter) return;
  holdTimeline?.kill();
  holdTimeline = null;
  buildRevealTimeline(selectedCharacter);
}

function startHold(event, duration = HOLD_SECONDS, forcedCharacter = null) {
  if (uiState !== "idle") return;
  if (event?.button !== undefined && event.button !== 0) return;

  selectedCharacter = forcedCharacter;
  uiState = "holding";
  drawTicket.classList.add("is-holding");
  holdHint.textContent = "（应援色蓄力中）";
  if (event?.pointerId !== undefined) drawTicket.setPointerCapture(event.pointerId);

  const activeCard = posterCards[activeSeriesIndex];
  holdTimeline = gsap.timeline({
    paused: true,
    onComplete: () => beginReveal(forcedCharacter)
  });

  holdTimeline
    .to(drawTicket, {
      "--hold-progress": 1,
      scale: 0.985,
      duration,
      ease: "none"
    }, 0)
    .to(activeCard, {
      scale: 1.04,
      rotationX: -2,
      duration,
      ease: "power1.inOut"
    }, 0)
    .to([coverWordmark, editionTitle], {
      x: 10,
      skewX: -2,
      duration,
      ease: "power1.inOut"
    }, 0)
    .play(0);
}

function cancelHold() {
  if (uiState !== "holding" || !holdTimeline) return;
  uiState = "idle";
  holdHint.textContent = HOLD_IDLE_COPY;
  drawTicket.classList.remove("is-holding");
  holdTimeline.eventCallback("onReverseComplete", () => {
    holdTimeline?.kill();
    holdTimeline = null;
    gsap.set(drawTicket, { "--hold-progress": 0, scale: 1 });
    gsap.set([coverWordmark, editionTitle], { clearProps: "transform" });
    switchSeries(activeSeriesIndex, false);
  });
  holdTimeline.reverse();
}

function returnHome(redraw = false, forcedCharacter = null) {
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  if (uiState !== "result") return;
  stopAllAudio();
  resultAudioStatus.textContent = soundEnabled ? "点击播放" : "声音已关闭";

  if (!revealTimeline) {
    resetResultToHome();
    gsap.set(drawTicket, { scale: 1, "--hold-progress": 0 });
    drawTicket.classList.remove("is-holding");
    holdHint.textContent = HOLD_IDLE_COPY;
    uiState = "idle";
    selectedCharacter = null;
    if (redraw || forcedCharacter) startHold(null, HOLD_SECONDS, forcedCharacter);
    return;
  }

  pendingRedraw = redraw;
  pendingCharacter = forcedCharacter;
  uiState = "revealing";
  $("resultTicket").querySelector("details").open = false;
  gsap.set(resultScreen, { pointerEvents: "none" });
  revealTimeline.reverse();
}

function renderCatalog(index, animate = true) {
  catalogSeriesIndex = (index + series.length) % series.length;
  const item = series[catalogSeriesIndex];
  const template = $("catalogCardTemplate");
  const members = characters.filter((character) => character.seriesKey === item.key);
  catalogGrid.innerHTML = "";
  updateSeriesButtons(catalogTabs, catalogSeriesIndex);
  setAccent(item);

  members.forEach((character) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    image.src = optimizedAssetPath(character.avatar);
    image.alt = `${character.nameCn} 角色卡面`;
    image.style.objectPosition = character.avatarPosition;
    card.querySelector("strong").textContent = character.nameCn;
    card.querySelector("small").textContent = character.roman;
    card.addEventListener("click", () => drawCatalogCharacter(character));
    catalogGrid.appendChild(card);
  });

  if (animate && !reducedMotion) {
    const cards = [...catalogGrid.children];
    const gridBox = catalogGrid.getBoundingClientRect();
    gsap.fromTo(cards, {
      x: (_, card) => gridBox.left + gridBox.width / 2
        - (card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2),
      y: (_, card) => gridBox.top + 36
        - (card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2),
      scale: 0.62,
      rotation: (index) => index % 2 === 0 ? -9 : 9,
      autoAlpha: 0.28
    }, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      autoAlpha: 1,
      duration: 0.46,
      stagger: 0.035,
      ease: "back.out(1.12)",
      clearProps: "transform,opacity,visibility"
    });
  }
}

function openCatalog() {
  if (uiState === "holding" || uiState === "revealing") return;
  if (uiState === "result") document.body.classList.add("is-catalog-open");
  renderCatalog(activeSeriesIndex, true);
  catalogScreen.setAttribute("aria-hidden", "false");
  catalogScreen.scrollIntoView({
    block: "start",
    behavior: reducedMotion ? "auto" : "smooth"
  });
}

function drawCatalogCharacter(character) {
  const targetIndex = series.findIndex((item) => item.key === character.seriesKey);
  if (uiState === "result") returnHome(true, character);
  else if (uiState === "idle") {
    switchSeries(targetIndex, false);
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    startHold(null, HOLD_SECONDS, character);
  }
}

function updateProgress(audio, target) {
  const progress = audio.duration ? audio.currentTime / audio.duration : 0;
  gsap.set(target, { scaleX: Math.min(1, Math.max(0, progress)) });
}

function bindEvents() {
  soundToggle.addEventListener("click", toggleSound);
  resultAudioToggle.addEventListener("click", toggleResultAudio);
  $("catalogOpen").addEventListener("click", openCatalog);
  $("catalogHome").addEventListener("click", (event) => {
    event.preventDefault();
    switchSeries(activeSeriesIndex, false);
    if (uiState === "result") returnHome(false);
    else window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });
  $("returnHome").addEventListener("click", (event) => {
    event.preventDefault();
    returnHome(false);
  });
  $("againBtn").addEventListener("click", () => returnHome(true));
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (uiState === "result") returnHome(false);
    else window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  cnInput.value = localStorage.getItem("lovelive-cn") || "";
  cnInput.addEventListener("change", () => {
    localStorage.setItem("lovelive-cn", cnInput.value.trim());
  });

  drawTicket.addEventListener("pointerdown", startHold);
  drawTicket.addEventListener("pointerup", cancelHold);
  drawTicket.addEventListener("pointercancel", cancelHold);
  drawTicket.addEventListener("pointerleave", (event) => {
    if (event.buttons) cancelHold();
  });
  drawTicket.addEventListener("contextmenu", (event) => event.preventDefault());
  drawTicket.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "Enter") && !event.repeat) {
      event.preventDefault();
      startHold();
    }
  });
  drawTicket.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      cancelHold();
    }
  });

  posterStage.addEventListener("pointerdown", (event) => {
    pointerStart = { x: event.clientX, y: event.clientY };
  });
  posterStage.addEventListener("pointerup", (event) => {
    if (!pointerStart) return;
    const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
    pointerStart = null;
    if (distance < 12) playSeriesAudio();
  });
  posterStage.addEventListener("pointercancel", () => {
    pointerStart = null;
  });

  previewAudio.addEventListener("timeupdate", () => updateProgress(previewAudio, audioProgress));
  representativeAudio.addEventListener("timeupdate", () => updateProgress(representativeAudio, resultAudioProgress));
  previewAudio.addEventListener("ended", () => {
    clearPlayingPosters();
    setAudioStatus("播放结束，点击海报可重播");
    gsap.set(audioProgress, { scaleX: 0 });
  });
  representativeAudio.addEventListener("ended", () => {
    resultAudioStatus.textContent = "播放结束";
    resultAudioToggle.textContent = "播放";
    gsap.set(resultAudioProgress, { scaleX: 0 });
  });

  Observer.create({
    target: posterStage,
    type: "touch,pointer",
    tolerance: 28,
    dragMinimum: 18,
    preventDefault: false,
    onLeft: () => switchSeries(activeSeriesIndex + 1),
    onRight: () => switchSeries(activeSeriesIndex - 1)
  });
}

function entrance() {
  if (reducedMotion) return;
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".masthead", { y: -22, autoAlpha: 0, duration: 0.42 }, 0)
    .from(".edition-kicker", { y: 16, autoAlpha: 0, duration: 0.34 }, 0.12)
    .from(coverWordmark, { x: -42, rotation: -7, autoAlpha: 0, duration: 0.62 }, 0.15)
    .from(editionTitle, { x: 36, rotation: 1, autoAlpha: 0, duration: 0.56 }, 0.24)
    .from(posterStage, { clipPath: "inset(0 100% 0 0)", duration: 0.7 }, 0.26)
    .from(".series-button", { x: 18, autoAlpha: 0, duration: 0.3, stagger: 0.035 }, 0.38)
    .from(".ticket-zone", { y: 20, autoAlpha: 0, duration: 0.4 }, 0.48);
}

renderPosters();
renderSeriesButtons(seriesIndex, (index) => switchSeries(index));
renderSeriesButtons(catalogTabs, (index) => renderCatalog(index));
renderCatalog(0, false);
switchSeries(0, false);
bindEvents();
entrance();
