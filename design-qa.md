# Design QA — 63 人「签幕揭晓」结果页

- Source visual truth: `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\reference-omikuji-curtain-853x1844.png`
- Implementation: `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\riko-omikuji-reference-853x1844.png`
- Mobile: `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\riko-omikuji-reference-390x844.png`
- Combined comparison: `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\comparison-reference-vs-riko-853x1844.png`
- 63-person contact sheets:
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-muse-contact-sheet.png`
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-aqours-contact-sheet.png`
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-nijigasaki-contact-sheet.png`
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-liella-contact-sheet.png`
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-hasunosora-contact-sheet.png`
  - `C:\Users\Dell\Desktop\lovelive_gacha_v9_cover_audio\lovelive_gacha_v9_cover_audio\output\playwright\results-bluebird-contact-sheet.png`
- Viewport and density: source `853×1844`; implementation `853×1844 CSS px`, DPR 1. Mobile uses the same `853:1844` ratio at `390×844`, DPR 1.
- State: 63 人均可由图鉴逐人直达结果页；随机抽卡池仍仅含约定的 14 人。减少动态，声音关闭。

## Full-view comparison

- Layout: two off-white paper curtains occupy the same outer frame; the portrait starts below the top black reveal area; the black name/oracle/action panel remains between the curtains and ends before the four-column fortune row.
- Typography: Mincho-style vertical title and oversized 大/吉 reproduce the hierarchy; gold labels, white body copy and English romanization follow the source.
- Color: black and paper white remain fixed; title diamonds, romanization, labels, stamps and redraw control use each character's own support color.
- Image: all 63 supplied official cards keep their painted backgrounds. Every portrait has an individual focal point and scale;横构图、旋转构图与 Bluebird 立绘均按脸部安全区校准。
- Copy: all existing character fortune data is preserved; only the visual arrangement changes.

## Focused comparison

- Black panel: starts at the portrait lower edge, occupies only the torn-paper opening, contains name → 断曰 → 今日行动, and stops above the four fortunes.
- Paper edges: both curtains taper inward around the portrait and black panel; stamps stay on the paper rather than on the black content.
- Controls: back, redraw and audio remain functional in the three source-aligned bottom columns.

## Comparison history

1. Earlier sample used a separate/overlapping black block and then an overlong black spine. Both changed the source composition.
2. Rebuilt the sample on an `853:1844` container and positioned the central black panel independently of the curtains.
3. Compared at native source size; corrected the vertical title, paper taper, portrait face crop, romanization overflow, stamps and bottom control columns.
4. Rechecked at `390×844`; the ticket stays proportional and horizontal scrolling is clamped.
5. Generalized the approved Riko sample to all 63 characters while keeping the 14-person random pool unchanged.
6. Rebuilt the contact screenshots from a fresh page per character to avoid stale GSAP/paint state during visual QA.
7. Calibrated the remaining horizontal/rotated cards individually and added adaptive name sizing for long Chinese names.

## Remaining P3

- The reference uses transparent Honoka artwork and pictographic control icons. The implementation deliberately keeps supplied official cards and existing text controls so no new character or icon artwork is generated.

## Verification

- `node --check script_v9.js`
- `node --check tests/ui-check.cjs`
- `node tests/validate-data.cjs` → 6 series, 63 unique characters
- `node tests/ui-check.cjs` with bundled `NODE_PATH` → pointer/keyboard reveal, result-page catalog visibility, click-only result audio, catalog fallback, 63 support colors, 63 portrait screenshots, pause/resume and responsive screenshots passed; animation `119.8fps`
- Browser console errors: none
- All 63 face images loaded; adaptive names fit their strips; 853px viewport has no horizontal overflow; 390px viewport cannot scroll horizontally.

final result: passed
