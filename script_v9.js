const characters = window.LL_CHARACTERS || [];
const series = window.LL_SERIES || [];
const charactersBySeries = characters.reduce((map, character) => {
  if (!map.has(character.seriesKey)) map.set(character.seriesKey, []);
  map.get(character.seriesKey).push(character);
  return map;
}, new Map());
const slipNoById = new Map(characters.map((character, index) => [character.id, index + 1]));

const $ = (id) => document.getElementById(id);
const home = $("home");
const result = $("result");
const cnInput = $("cnInput");
const drawBtn = $("drawBtn");
const againBtn = $("againBtn");
const backBtn = $("backBtn");
const copyBtn = $("copyBtn");
const resultCard = $("resultCard");
const coverAudioStatus = $("coverAudioStatus");
const coverAudioToggle = $("coverAudioToggle");
const representativeBox = $("representativeBox");
const representativeTitle = $("representativeTitle");
const representativeMeta = $("representativeMeta");
const representativePlayBtn = $("representativePlayBtn");
const representativeVideoLink = $("representativeVideoLink");
const representativeStatus = $("representativeStatus");
const representativeAudio = $("representativeAudio");
const coverAudio = new Audio();
coverAudio.preload = "none";

let currentCoverSeries = null;
let currentCharacter = null;
let lastDrawId = null;

cnInput.value = localStorage.getItem("ll-cn") || "";

function optimizedAssetPath(src) {
  if (!src) return src;
  const iconMatch = src.match(/^data\/icon\/(.+)\.(png|jpe?g)$/i);
  if (iconMatch) return `data/icon_webp/${iconMatch[1]}.webp`;
  const coverMatch = src.match(/^data\/covers\/(.+)\.(png|jpe?g)$/i);
  if (coverMatch) return `data/covers_webp/${coverMatch[1]}.webp`;
  return src;
}

function cssVar(el, name, value) {
  el.style.setProperty(name, value);
}

function safeInitial(name) {
  return (name || "?").replace(/[·\s]/g, "").slice(-2);
}

function createAvatar(character, size = "mini") {
  const div = document.createElement("div");
  div.className = `avatar ${size === "big" ? "big-avatar" : "mini-avatar"}`;
  div.dataset.initial = safeInitial(character.nameCn);
  cssVar(div, "--char-color", character.color || character.seriesColor || "#ff7ccf");
  if (character.avatarPosition) cssVar(div, "--avatar-position", character.avatarPosition);

  const img = document.createElement("img");
  img.loading = size === "big" ? "eager" : "lazy";
  img.decoding = "async";
  img.src = optimizedAssetPath(character.avatar);
  img.alt = `${character.nameCn} 头像`;
  img.onload = () => div.classList.add("has-image");
  img.onerror = () => {
    if (!img.dataset.fallbackTried) {
      img.dataset.fallbackTried = "1";
      img.src = character.avatar;
      return;
    }
    div.classList.remove("has-image");
    img.remove();
  };
  div.appendChild(img);
  return div;
}

function stopCoverAudio(resetText = true) {
  coverAudio.pause();
  coverAudio.currentTime = 0;
  document.querySelectorAll(".cover-tile.is-playing").forEach((el) => el.classList.remove("is-playing"));
  currentCoverSeries = null;
  if (coverAudioToggle) {
    coverAudioToggle.hidden = true;
    coverAudioToggle.textContent = "暂停团歌";
  }
  if (resetText && coverAudioStatus) {
    coverAudioStatus.textContent = "点团封面可播放对应团歌";
  }
}

function stopRepresentativeAudio(reset = true) {
  if (!representativeAudio) return;
  representativeAudio.pause();
  if (reset) representativeAudio.currentTime = 0;
  if (representativePlayBtn) representativePlayBtn.textContent = "播放";
  if (representativeStatus) representativeStatus.textContent = "";
}

function setRepresentativeTrack(character) {
  const track = character?.representative;
  stopRepresentativeAudio(true);

  if (!track?.audio || !representativeBox || !representativeAudio) {
    if (representativeBox) representativeBox.hidden = true;
    if (representativeAudio) representativeAudio.removeAttribute("src");
    return;
  }

  representativeBox.hidden = false;
  representativeTitle.textContent = track.title || "代表曲";
  representativeMeta.textContent = track.display || "";
  representativeAudio.src = track.audio;
  representativeAudio.load();

  if (track.videoUrl) {
    representativeVideoLink.hidden = false;
    representativeVideoLink.href = track.videoUrl;
    representativeVideoLink.textContent = track.videoTitle ? `相关视频：${track.videoTitle}` : "相关视频";
  } else {
    representativeVideoLink.hidden = true;
    representativeVideoLink.removeAttribute("href");
  }
}

async function toggleRepresentativeAudio() {
  if (!representativeAudio?.src) return;

  if (!representativeAudio.paused) {
    representativeAudio.pause();
    representativePlayBtn.textContent = "继续";
    if (representativeStatus) representativeStatus.textContent = "已暂停";
    return;
  }

  stopCoverAudio(false);
  try {
    await representativeAudio.play();
    representativePlayBtn.textContent = "暂停";
    if (representativeStatus) representativeStatus.textContent = "正在播放";
  } catch (error) {
    representativePlayBtn.textContent = "播放";
    if (representativeStatus) representativeStatus.textContent = "音频无法播放，请用本地服务器打开页面。";
  }
}

async function playSeriesAudio(item, tile) {
  if (!item?.coverAudio || !coverAudioStatus || !coverAudioToggle) return;
  stopRepresentativeAudio(false);

  const sameTrack = currentCoverSeries === item.key && coverAudio.src.includes(item.coverAudio);

  if (sameTrack && !coverAudio.paused) {
    coverAudio.pause();
    coverAudioToggle.textContent = "继续团歌";
    coverAudioStatus.textContent = `已暂停：${item.label}《${item.coverSong || "团歌"}》`;
    tile.classList.remove("is-playing");
    return;
  }

  document.querySelectorAll(".cover-tile.is-playing").forEach((el) => el.classList.remove("is-playing"));
  currentCoverSeries = item.key;

  if (!sameTrack) {
    coverAudio.src = item.coverAudio;
    coverAudio.load();
  }

  try {
    await coverAudio.play();
    tile.classList.add("is-playing");
    coverAudioToggle.hidden = false;
    coverAudioToggle.textContent = "暂停团歌";
    coverAudioStatus.textContent = `正在播放：${item.label}《${item.coverSong || "团歌"}》`;
  } catch (error) {
    coverAudioToggle.hidden = true;
    coverAudioStatus.textContent = "团歌播放失败。若直接用 file:// 打开，请改用本地服务器打开页面。";
  }
}

function getCharactersBySeries(seriesKey) {
  return charactersBySeries.get(seriesKey) || [];
}

function renderCoverGrid() {
  const grid = $("coverGrid");
  const tpl = $("coverTileTemplate");
  grid.innerHTML = "";

  series.forEach((item) => {
    const tile = tpl.content.firstElementChild.cloneNode(true);
    tile.classList.add(`cover-key-${item.key}`);
    tile.dataset.seriesKey = item.key;
    cssVar(tile, "--series-color", item.color || "#ff7ccf");
    cssVar(tile, "--series-color2", item.color2 || "#ffe27a");
    const img = tile.querySelector("img");
    img.loading = "lazy";
    img.decoding = "async";
    tile.querySelector("strong").textContent = item.label;
    tile.querySelector("span").textContent = item.hint;
    img.src = optimizedAssetPath(item.cover);
    img.alt = `${item.label} 团封面`;
    tile.style.setProperty("--cover-image", `url("${optimizedAssetPath(item.cover)}")`);
    tile.title = item.coverSong ? `点击播放：${item.label}《${item.coverSong}》` : `${item.label} 团封面`;
    img.onload = () => {
      tile.classList.add("has-image");
      if (img.naturalWidth && img.naturalHeight) {
        tile.style.setProperty("--cover-ratio", `${img.naturalWidth} / ${img.naturalHeight}`);
      }
    };
    img.onerror = () => {
      if (!img.dataset.fallbackTried) {
        img.dataset.fallbackTried = "1";
        img.src = item.cover;
        tile.style.setProperty("--cover-image", `url("${item.cover}")`);
        return;
      }
      img.remove();
    };
    tile.addEventListener("click", () => playSeriesAudio(item, tile));
    grid.appendChild(tile);
  });
}

function renderCatalogGroups() {
  const wrap = $("catalogGroups");
  const tpl = $("miniCardTemplate");
  wrap.innerHTML = "";
  wrap.onclick = (event) => {
    const groupToggle = event.target.closest(".group-toggle");
    if (!groupToggle || !wrap.contains(groupToggle)) return;
    const grid = $(groupToggle.getAttribute("aria-controls"));
    if (!grid) return;
    const willExpand = groupToggle.getAttribute("aria-expanded") !== "true";
    groupToggle.setAttribute("aria-expanded", String(willExpand));
    groupToggle.textContent = willExpand ? "收起" : "展开";
    grid.hidden = !willExpand;
  };

  series.forEach((s) => {
    const group = document.createElement("section");
    group.className = "catalog-group";
    cssVar(group, "--series-color", s.color || "#ff7ccf");
    cssVar(group, "--series-color2", s.color2 || "#ffe27a");

    const members = getCharactersBySeries(s.key);
    const head = document.createElement("div");
    head.className = "catalog-group-head";

    const title = document.createElement("h3");
    title.className = "catalog-group-title";
    title.innerHTML = `${s.label}<small>${s.jp}</small>`;

    const actions = document.createElement("div");
    actions.className = "catalog-group-actions";

    const count = document.createElement("div");
    count.className = "group-count";
    count.textContent = `${members.length} 人`;

    const groupToggle = document.createElement("button");
    groupToggle.className = "group-toggle";
    groupToggle.type = "button";
    groupToggle.textContent = "展开";
    groupToggle.setAttribute("aria-expanded", "false");

    actions.append(count, groupToggle);
    head.append(title, actions);

    const grid = document.createElement("div");
    grid.className = "catalog";
    grid.id = `catalog-${s.key}`;
    grid.hidden = true;
    groupToggle.setAttribute("aria-controls", grid.id);

    members.forEach((character) => {
      const card = tpl.content.firstElementChild.cloneNode(true);
      cssVar(card, "--char-color", character.color || s.color || "#ff7ccf");
      card.querySelector("strong").textContent = character.nameCn;
      card.querySelector("span").textContent = `${character.nameJp} · ${character.focus || character.traits}`;
      card.querySelector(".avatar").replaceWith(createAvatar(character));
      card.onclick = () => showResult(character, true);
      grid.appendChild(card);
    });

    group.append(head, grid);
    wrap.appendChild(group);
  });
}

function pickRandomCharacter() {
  if (!characters.length) return null;
  let candidate = characters[Math.floor(Math.random() * characters.length)];
  if (characters.length > 1) {
    let guard = 0;
    while (candidate.id === lastDrawId && guard < 8) {
      candidate = characters[Math.floor(Math.random() * characters.length)];
      guard += 1;
    }
  }
  lastDrawId = candidate.id;
  return candidate;
}

function getCn() {
  const cn = cnInput.value.trim() || "今天的你";
  localStorage.setItem("ll-cn", cnInput.value.trim());
  return cn;
}

function setResultTheme(character) {
  cssVar(resultCard, "--char-color", character.color || "#ff7ccf");
  cssVar(resultCard, "--series-color", character.seriesColor || "#75e7ff");
  cssVar(resultCard, "--series-color2", character.seriesColor2 || "#ffe27a");
}

function composeFortuneLine(cn, character) {
  return `${cn} 今日结缘的是「${character.nameCn}」——大吉。此签主「${character.focus}」，请把今天先交给这一份心意去带路。`;
}

function getSlipNo(character) {
  const idx = slipNoById.get(character.id) || 1;
  return `第 ${String(idx).padStart(2, "0")} 签`;
}

function renderPoem(lines) {
  const wrap = $("resultPoem");
  wrap.innerHTML = "";
  (lines || []).forEach((line) => {
    const col = document.createElement("span");
    col.className = "poem-col";
    col.textContent = line;
    wrap.appendChild(col);
  });
}

function fillFortuneMeta(character) {
  $("resultWish").textContent = character.wishFortune || character.focus || "";
  $("resultPeople").textContent = character.peopleFortune || "";
  $("resultTravel").textContent = character.travelFortune || "";
  $("resultStudy").textContent = character.studyFortune || "";
}

function showResult(character, fromCatalog = false) {
  if (!character) return;
  stopCoverAudio(false);
  stopRepresentativeAudio(true);
  currentCharacter = character;
  const cn = getCn();
  setResultTheme(character);

  $("resultSlipNo").textContent = getSlipNo(character);
  $("resultSeries").textContent = character.series;
  $("resultName").textContent = character.nameCn;
  $("resultJp").textContent = `${character.nameJp} / ${character.roman}`;
  $("fortuneLine").textContent = composeFortuneLine(cn, character);
  $("resultOracle").textContent = character.oracle;
  $("resultCv").textContent = character.cv;
  $("resultTraits").textContent = character.traits;
  $("resultIntro").textContent = character.intro;
  $("resultLucky").textContent = character.lucky;
  $("resultTip").textContent = character.tip || character.trivia || "";
  fillFortuneMeta(character);
  renderPoem(character.poemLines || []);
  setRepresentativeTrack(character);

  const avatar = $("resultAvatar");
  const newAvatar = createAvatar(character, "big");
  newAvatar.id = "resultAvatar";
  avatar.replaceWith(newAvatar);

  home.classList.remove("is-active");
  result.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: fromCatalog ? "smooth" : "instant" });
}

function draw() {
  drawBtn.disabled = true;
  drawBtn.textContent = "签筒转动中...";
  const character = pickRandomCharacter();
  const machine = document.querySelector(".machine-core");

  machine.animate([
    { transform: "translateX(0) rotate(0)" },
    { transform: "translateX(-5px) rotate(-.6deg)" },
    { transform: "translateX(7px) rotate(.7deg)" },
    { transform: "translateX(-3px) rotate(-.3deg)" },
    { transform: "translateX(0) rotate(0)" }
  ], { duration: 540, easing: "cubic-bezier(.2,.7,.2,1)" });

  setTimeout(() => {
    showResult(character);
    drawBtn.disabled = false;
    drawBtn.textContent = "拉拉人不灭！";
  }, 560);
}

function goHome() {
  stopRepresentativeAudio(true);
  result.classList.remove("is-active");
  home.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

coverAudio.addEventListener("ended", () => {
  stopCoverAudio();
  if (coverAudioStatus) coverAudioStatus.textContent = "播放结束。点团封面可再次播放。";
});

coverAudio.addEventListener("pause", () => {
  if (!coverAudio.ended && currentCoverSeries && coverAudioToggle && coverAudioStatus && coverAudio.currentTime > 0) {
    coverAudioToggle.textContent = "继续团歌";
  }
});

coverAudio.addEventListener("error", () => {
  if (coverAudioStatus) {
    coverAudioStatus.textContent = "团歌文件未找到或无法播放。";
  }
  if (coverAudioToggle) coverAudioToggle.hidden = true;
  document.querySelectorAll(".cover-tile.is-playing").forEach((el) => el.classList.remove("is-playing"));
});

if (representativeAudio) {
  representativeAudio.addEventListener("ended", () => {
    if (representativePlayBtn) representativePlayBtn.textContent = "播放";
    if (representativeStatus) representativeStatus.textContent = "播放结束";
  });
  representativeAudio.addEventListener("error", () => {
    if (representativePlayBtn) representativePlayBtn.textContent = "播放";
    if (representativeStatus) representativeStatus.textContent = "代表曲文件未找到或无法播放。";
  });
}

async function copyFortune() {
  if (!currentCharacter) return;
  const text = [
    "LoveLive! 今日恋みくじ",
    `CN：${getCn()}`,
    `今日结缘：${currentCharacter.nameCn}（${currentCharacter.nameJp}）`,
    "签位：大吉",
    `签意：${currentCharacter.focus}`,
    currentCharacter.representative ? `代表曲：${currentCharacter.representative.display || currentCharacter.representative.title}` : null,
    `断曰：${currentCharacter.oracle}`,
    `解签：${currentCharacter.lucky}`,
    `小Tip：${currentCharacter.tip || currentCharacter.trivia || ""}`
  ].filter(Boolean).join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "已复制！";
    setTimeout(() => copyBtn.textContent = "复制今日签文", 1200);
  } catch (error) {
    copyBtn.textContent = "复制失败，请手动选择";
    setTimeout(() => copyBtn.textContent = "复制今日签文", 1600);
  }
}

cnInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") draw();
});

drawBtn.addEventListener("click", draw);
againBtn.addEventListener("click", () => showResult(pickRandomCharacter()));
backBtn.addEventListener("click", goHome);
copyBtn.addEventListener("click", copyFortune);
if (representativePlayBtn) representativePlayBtn.addEventListener("click", toggleRepresentativeAudio);
if (coverAudioToggle) {
  coverAudioToggle.addEventListener("click", async () => {
    const tile = currentCoverSeries ? document.querySelector(`.cover-tile[data-series-key="${currentCoverSeries}"]`) : null;
    const item = currentCoverSeries ? series.find((s) => s.key === currentCoverSeries) : null;
    if (tile && item) {
      await playSeriesAudio(item, tile);
    }
  });
}
renderCoverGrid();
renderCatalogGroups();
