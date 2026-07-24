const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "output", "playwright");
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const url = "http://127.0.0.1:5173";
const allowedDrawIds = new Set([
  "muse-kotori", "muse-maki", "muse-eli", "muse-nico",
  "aqours-you", "aqours-riko", "aqours-yoshiko", "aqours-dia",
  "niji-ayumu", "niji-setsuna", "niji-shioriko", "niji-ai", "niji-lanzhu",
  "hasu-rurino"
]);

fs.mkdirSync(output, { recursive: true });

async function longPress(page, duration = 510) {
  const ticket = page.locator("#drawTicket");
  await ticket.scrollIntoViewIfNeeded();
  await ticket.hover();
  await page.mouse.down();
  await page.waitForTimeout(duration);
  await page.mouse.up();
}

async function capturePerformance(page) {
  const frames = path.join(output, "draw-frames");
  fs.rmSync(frames, { recursive: true, force: true });
  fs.mkdirSync(frames, { recursive: true });
  const ticket = page.locator("#drawTicket");
  await ticket.scrollIntoViewIfNeeded();
  await ticket.hover();
  await page.mouse.down();
  for (let index = 0; index < 38; index += 1) {
    await page.screenshot({ path: path.join(frames, `frame-${String(index).padStart(3, "0")}.png`) });
    await page.waitForTimeout(75);
  }
  await page.mouse.up();
}

async function waitForResult(page) {
  await page.waitForFunction(() => {
    const result = document.querySelector("#resultScreen");
    const art = document.querySelector("#resultArt");
    const ticket = document.querySelector("#drawTicket");
    return result?.getAttribute("aria-hidden") === "false"
      && Number.parseFloat(getComputedStyle(result).opacity) > 0.98
      && art?.complete && art.naturalWidth > 0
      && Number.parseFloat(getComputedStyle(art).opacity) > 0.98
      && !ticket?.disabled;
  }, null, { timeout: 7000 });
}

async function waitForHome(page) {
  await page.waitForFunction(() => {
    const home = document.querySelector("#homeScreen");
    return !home?.hasAttribute("aria-hidden")
      && Number.parseFloat(getComputedStyle(home).opacity) > 0.98;
  }, null, { timeout: 7000 });
}

(async () => {
  const browser = await chromium.launch({
    executablePath: edge,
    headless: true,
    timeout: 20000,
    args: ["--no-first-run", "--no-default-browser-check"]
  });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();
  page.setDefaultTimeout(8000);
  const consoleErrors = [];
  const audioRequests = [];
  const failedResponses = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("request", (request) => {
    if (/\.mp3(?:$|\?)/.test(request.url())) audioRequests.push(request.url());
  });
  page.on("response", (response) => {
    if (response.status() >= 400) failedResponses.push(`${response.status()} ${response.url()}`);
  });

  await page.goto(url, { waitUntil: "networkidle" });
  console.log("home loaded");
  await page.waitForTimeout(1300);
  const configuredDrawIds = await page.evaluate(() => drawCharacters.map(({ id }) => id));
  assert.deepEqual(new Set(configuredDrawIds), allowedDrawIds, "draw pool does not match the convention card set");
  const sampledDrawIds = await page.evaluate(() =>
    Array.from({ length: 500 }, () => pickRandomCharacter().id)
  );
  assert.ok(sampledDrawIds.every((id) => allowedDrawIds.has(id)), "random draw escaped the convention pool");
  assert.equal(await page.locator(".poster-card").count(), 6);
  assert.equal(await page.locator(".poster-card > img").count(), 6);
  assert.equal(await page.locator(".poster-collage").count(), 0, "home must use the original single covers");
  assert.ok((await page.locator(".poster-card > img").evaluateAll((images) =>
    images.every((image) => new URL(image.src).pathname.includes("/data/covers_webp/"))
  )), "home is not using the original cover set");
  assert.equal(await page.locator("#seriesIndex .series-button").count(), 6);
  assert.equal(audioRequests.length, 0, "sound-off load requested audio");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
  await page.screenshot({ path: path.join(output, "home-390x844.png"), fullPage: true });

  const initialCaption = await page.locator("#posterCaption").textContent();
  const stage = await page.locator("#posterStage").boundingBox();
  assert.ok(stage);
  await page.mouse.move(stage.x + stage.width * 0.8, stage.y + stage.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(stage.x + stage.width * 0.2, stage.y + stage.height * 0.5, { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(700);
  assert.notEqual(await page.locator("#posterCaption").textContent(), initialCaption, "swipe did not switch series");

  await page.locator("#drawTicket").scrollIntoViewIfNeeded();
  await page.evaluate(async () => {
    const started = performance.now();
    startHold({ button: 0 });
    await new Promise((resolve) => setTimeout(resolve, Math.max(0, 490 - (performance.now() - started))));
    cancelHold();
  });
  await page.waitForTimeout(500);
  assert.equal(await page.locator("#resultScreen").getAttribute("aria-hidden"), "true", "short hold revealed a result");

  await page.locator("#drawTicket").hover();
  await page.mouse.down();
  await page.waitForTimeout(100);
  await page.locator("#drawTicket").dispatchEvent("pointercancel");
  await page.mouse.up();
  await page.waitForTimeout(500);
  assert.equal(await page.locator("#resultScreen").getAttribute("aria-hidden"), "true", "pointer cancellation revealed a result");

  await capturePerformance(page);
  await waitForResult(page);
  await page.waitForFunction(() => scrollY < 10);
  console.log("pointer reveal passed");
  assert.ok((await page.locator("#resultName").textContent()).trim());
  assert.equal((await page.locator("#fortuneRank").textContent()).trim(), "大吉");
  assert.equal(await page.locator("#resultPoem span").count(), 2);
  for (const id of ["resultOracle", "resultWish", "resultPeople", "resultTravel", "resultStudy", "todayAction"]) {
    assert.ok((await page.locator(`#${id}`).textContent()).trim(), `${id} is empty`);
  }
  assert.equal(await page.locator("#resultPosterDock").count(), 0, "result must not show a group poster");
  assert.equal(await page.locator(".omikuji-curtain").count(), 2, "result must show two omikuji curtains");
  assert.equal(await page.locator("#posterStack .poster-card").count(), 6, "reveal moved a cover out of the home stack");
  const artBox = await page.locator("#resultArt").boundingBox();
  assert.ok(artBox && artBox.height > artBox.width, "result character art must use the portrait opening");
  assert.equal(await page.locator("#resultArt").evaluate((art) => getComputedStyle(art).objectFit), "cover");
  assert.equal(audioRequests.length, 0, "sound-off reveal requested audio");
  assert.equal(await page.locator("#catalogScreen").evaluate((catalog) => getComputedStyle(catalog).display), "none");
  await page.screenshot({ path: path.join(output, "result-390x844.png"), fullPage: true });

  await page.locator("#catalogOpen").click();
  await page.waitForTimeout(500);
  assert.equal(await page.locator("#catalogScreen").getAttribute("aria-hidden"), "false");
  assert.notEqual(await page.locator("#catalogScreen").evaluate((catalog) => getComputedStyle(catalog).display), "none");
  assert.ok(await page.evaluate(() => scrollY > 100), "MEMBERS did not scroll to the catalog");

  await page.locator("#returnHome").click();
  await waitForHome(page);
  await page.waitForTimeout(500);
  assert.ok(await page.evaluate(() => scrollY < 10), "return home did not restore the top of the page");

  await longPress(page);
  await waitForResult(page);
  const firstName = await page.locator("#resultName").textContent();
  await page.locator("#againBtn").click();
  await page.waitForFunction((name) => {
    const result = document.querySelector("#resultScreen");
    return Number.parseFloat(getComputedStyle(result).opacity) > 0.98
      && document.querySelector("#resultName")?.textContent !== name
      && !document.querySelector("#drawTicket")?.disabled;
  }, firstName, { timeout: 10000 });

  await page.locator("#returnHome").click();
  await waitForHome(page);
  await page.evaluate(() => {
    window.__rafSample = { frames: 0, start: performance.now(), end: 0 };
    const tick = (time) => {
      window.__rafSample.frames += 1;
      window.__rafSample.end = time;
      if (time - window.__rafSample.start < 3500) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  await page.locator("#drawTicket").focus();
  await page.keyboard.down("Space");
  await page.waitForTimeout(510);
  await page.keyboard.up("Space");
  await waitForResult(page);
  const fps = await page.evaluate(() => {
    const sample = window.__rafSample;
    return sample.frames / ((sample.end - sample.start) / 1000);
  });
  assert.ok(fps >= 55, `animation frame rate too low: ${fps.toFixed(1)}fps`);
  console.log(`animation ${fps.toFixed(1)}fps`);
  console.log("keyboard reveal passed");
  await page.locator("#returnHome").click();
  await waitForHome(page);

  const requestsBeforeSound = audioRequests.length;
  await page.locator("#soundToggle").click();
  await page.waitForTimeout(250);
  assert.equal(await page.locator("#soundToggle").getAttribute("aria-pressed"), "true");
  assert.equal(audioRequests.length, requestsBeforeSound, "sound toggle loaded audio before a poster click");
  await page.locator("#posterStage").click({ position: { x: 80, y: 120 } });
  await page.waitForTimeout(500);
  assert.ok(audioRequests.some((request) => request.includes("/groups/")), "poster click did not load a group song");
  console.log("sound opt-in passed");

  await page.locator("#catalogOpen").click();
  await page.locator("#catalogTabs .series-button").nth(4).click();
  await page.waitForTimeout(40);
  assert.ok(await page.locator("#catalogGrid .catalog-card").evaluateAll((cards) =>
    cards.some((card) => getComputedStyle(card).transform !== "none")
  ), "catalog members did not animate from a gathered state");
  await page.waitForTimeout(900);
  await page.screenshot({ path: path.join(output, "catalog-390x844.png"), fullPage: true });
  const requestsBeforeResult = audioRequests.length;
  await page.locator("#catalogGrid .catalog-card").first().click();
  await waitForResult(page);
  assert.equal((await page.locator("#resultSeries").textContent()).trim(), "莲之空");
  assert.equal(await page.locator("#resultArt").evaluate((art) => getComputedStyle(art).objectFit), "cover");
  assert.equal(audioRequests.length, requestsBeforeResult, "result reveal autoplayed audio");
  await page.locator("#resultAudioToggle").click();
  await page.waitForFunction(() => document.querySelector("#resultAudioToggle")?.textContent === "暂停");
  assert.ok(audioRequests.some((request) => request.includes("/groups/hasunosora.mp3")), "missing-song fallback did not request series song");
  console.log("catalog fallback passed");

  await page.locator("#resultAudioToggle").click();
  assert.equal((await page.locator("#resultAudioToggle").textContent()).trim(), "继续");
  await page.locator("#resultAudioToggle").click();
  await page.waitForFunction(() => document.querySelector("#resultAudioToggle")?.textContent === "暂停");
  console.log("result audio pause/resume passed");

  assert.deepEqual(consoleErrors, [], `console errors: ${consoleErrors.join(" | ")}; requests: ${failedResponses.join(" | ")}`);

  await context.close();
  console.log("performance frames saved");

  for (const viewport of [
    { width: 430, height: 932, homeName: "home-430x932.png", catalogName: "catalog-430x932.png", resultName: "result-430x932.png" },
    { width: 1440, height: 1000, homeName: "home-1440x1000.png", catalogName: "catalog-1440x1000.png", resultName: "result-1440x1000.png" }
  ]) {
    const shotPage = await browser.newPage({ viewport });
    await shotPage.goto(url, { waitUntil: "networkidle" });
    await shotPage.waitForTimeout(1300);
    assert.equal(await shotPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
    await shotPage.screenshot({ path: path.join(output, viewport.homeName), fullPage: true });
    await shotPage.locator("#catalogOpen").click();
    await shotPage.waitForTimeout(900);
    assert.ok(await shotPage.locator("#catalogGrid .catalog-card").count());
    assert.equal(await shotPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
    await shotPage.screenshot({ path: path.join(output, viewport.catalogName), fullPage: true });
    await shotPage.locator("#catalogHome").click();
    await shotPage.waitForTimeout(500);
    await longPress(shotPage);
    await waitForResult(shotPage);
    assert.equal(await shotPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
    await shotPage.screenshot({ path: path.join(output, viewport.resultName), fullPage: true });
    await shotPage.close();
  }
  console.log("responsive screenshots passed");

  const reduced = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce"
  });
  await reduced.goto(url, { waitUntil: "networkidle" });
  await longPress(reduced);
  await reduced.waitForFunction(() => document.querySelector("#resultScreen")?.getAttribute("aria-hidden") === "false");
  assert.ok((await reduced.locator("#resultName").textContent()).trim());
  await reduced.close();

  const contact = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce"
  });
  await contact.goto(url, { waitUntil: "networkidle" });
  const allCharacterIds = await contact.evaluate(() => characters.map(({ id }) => id));
  for (const [index, id] of allCharacterIds.entries()) {
    if (index) await contact.reload({ waitUntil: "networkidle" });
    await contact.evaluate((characterId) => {
      const character = characters.find(({ id: candidate }) => candidate === characterId);
      showReducedMotionResult(character);
    }, id);
    await contact.locator("#resultArt").evaluate((art) => art.decode());
    await contact.waitForTimeout(50);
    const curtainState = await contact.evaluate((characterId) => {
      const character = characters.find(({ id: candidate }) => candidate === characterId);
      return {
        layout: resultScreen.classList.contains("is-reference-proof"),
        color: document.querySelector("#resultTicket").style.getPropertyValue("--result-gold").trim().toLowerCase(),
        expectedColor: character.color.toLowerCase(),
        roman: document.querySelector("#resultJp").textContent,
        nameFits: document.querySelector("#resultName").scrollWidth <= document.querySelector("#resultName").clientWidth + 1
      };
    }, id);
    assert.equal(curtainState.layout, true, `${id} did not use the curtain result layout`);
    assert.equal(curtainState.color, curtainState.expectedColor, `${id} did not use its support color`);
    assert.ok(curtainState.roman && !curtainState.roman.includes("/"), `${id} did not use the compact roman name`);
    assert.equal(curtainState.nameFits, true, `${id} name overflowed the curtain`);
    await contact.screenshot({ path: path.join(output, `portrait-${id}.png`), fullPage: false });
  }
  await contact.close();

  await browser.close();
  console.log(`ui checks passed; ${audioRequests.length} audio requests after explicit opt-in`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
