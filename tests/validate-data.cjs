const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "data", "characters.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const series = sandbox.window.LL_SERIES;
const characters = sandbox.window.LL_CHARACTERS;
const fortuneFields = [
  "slipNo",
  "fortuneRank",
  "poemLines",
  "oracle",
  "wishFortune",
  "peopleFortune",
  "travelFortune",
  "studyFortune",
  "todayAction"
];
const banned = ["今日之吉", "稳稳落下", "好运会自己显形", "此签主", "—", "–"];

assert.equal(series.length, 6, "expected 6 series");
assert.equal(characters.length, 63, "expected 63 characters");
assert.equal(new Set(characters.map(({ id }) => id)).size, 63, "character ids must be unique");
for (const field of ["oracle", "wishFortune", "peopleFortune", "travelFortune", "studyFortune", "todayAction"]) {
  assert.equal(new Set(characters.map((character) => character[field])).size, 63, `${field} values must be unique`);
}
assert.equal(new Set(characters.map(({ poemLines }) => poemLines.join("|"))).size, 63, "poems must be unique");
assert.ok(characters.filter(({ seriesKey }) => seriesKey === "bluebird").every(({ avatarZoom }) => avatarZoom > 1));
assert.ok(characters.filter(({ seriesKey }) => seriesKey !== "bluebird").every(({ avatarZoom }) => avatarZoom === 1));

for (const item of series) {
  for (const key of ["cover", "posterFit", "posterPosition", "previewAudio", "coverAudio", "coverSong"]) {
    assert.ok(item[key], `${item.key} missing ${key}`);
  }
  assert.ok(fs.existsSync(path.join(root, item.cover)), `missing cover ${item.cover}`);
  assert.ok(fs.existsSync(path.join(root, item.previewAudio)), `missing preview ${item.previewAudio}`);
}

for (const character of characters) {
  for (const field of fortuneFields) {
    assert.ok(character[field], `${character.id} missing ${field}`);
  }
  assert.equal(character.fortuneRank, "大吉", `${character.id} must be 大吉`);
  assert.equal(character.poemLines.length, 2, `${character.id} poem must have two lines`);
  assert.ok(character.oracle.length >= 12, `${character.id} oracle too short`);
  assert.ok(character.todayAction.length >= 12, `${character.id} today action too short`);
  assert.ok(["cover", "contain"].includes(character.resultPortraitFit), `${character.id} portrait fit invalid`);
  assert.ok(character.resultPortraitPosition, `${character.id} missing portrait position`);
  assert.ok(Number.isFinite(character.resultPortraitScale), `${character.id} portrait scale invalid`);
  assert.equal(character.resultPortraitFit, "cover", `${character.id} portrait must fill the curtain opening`);
  assert.equal(character.resultPortraitScale >= 0.75, true, `${character.id} portrait scale too small`);
  const optimized = character.avatar
    .replace("data/icon/", "data/icon_webp/")
    .replace(/\.(png|jpe?g)$/i, ".webp");
  assert.ok(fs.existsSync(path.join(root, optimized)), `missing card ${optimized}`);
  if (character.representative?.audio) {
    assert.ok(fs.existsSync(path.join(root, character.representative.audio)), `missing representative ${character.representative.audio}`);
  }
  for (const phrase of banned) {
    const fortuneText = fortuneFields.map((field) => Array.isArray(character[field])
      ? character[field].join("")
      : character[field]).join("");
    assert.ok(!fortuneText.includes(phrase), `${character.id} contains ${phrase}`);
  }
}

console.log(`validated ${series.length} series and ${characters.length} unique characters`);
