const { test, expect } = require('@playwright/test');

const INPUT_SELECTOR = 'textarea[placeholder="Type in Singlish..."]'; 
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

test.describe('Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- POSITIVE TESTS (Updated with 3s Wait & Spelling Fixes) ---

  test('Pos_Fun_001: Convert a simple daily sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa.');
    await page.waitForTimeout(3000); // 3 Seconds wait
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා.');
  });

  test('Pos_Fun_002: Convert a compound sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa, haebaeyi vahina nisaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා, හැබැයි වහින නිසා.');
  });

  test('Pos_Fun_003: Convert a complex sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa enavaanam mama balan innavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයා එනවානම් මම බලන් ඉන්නවා.');
  });

  test('Pos_Fun_004: Convert a question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaata kohomadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයාට කොහොමද?');
  });

  test('Pos_Fun_005: Convert a command', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('vahaama enna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('වහාම එන්න.');
  });

  test('Pos_Fun_006: Convert a positive statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api heta enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි හෙට එනවා.');
  });

  test('Pos_Fun_007: Convert a negative statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama ehema karannee naehae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම එහෙම කරන්නේ නැහැ.');
  });

  test('Pos_Fun_008: Convert a greeting', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('suba udhaeesanak!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('සුබ උදෑසනක්!');
  });

  test('Pos_Fun_009: Convert a request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata udhavvak karanna puLuvandha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට උදව්වක් කරන්න පුළුවන්ද?');
  });

  test('Pos_Fun_010: Convert a polite phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karuNaakaralaa mata eeka dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුණාකරලා මට ඒක දෙන්න.');
  });

  test('Pos_Fun_011: Convert an informal phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eeyi, ooka dhiyan.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඒයි, ඕක දියන්.');
  });

  test('Pos_Fun_012: Convert a common expression', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata nidhimathayi.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට නිදිමතයි.');
  });

  test('Pos_Fun_013: Convert a multi-word phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('poddak inna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('පොඩ්ඩක් ඉන්න.');
  });

  test('Pos_Fun_014: Convert past tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama iiyee gedhara giyaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඊයේ ගෙදර ගියා.');
  });

  test('Pos_Fun_015: Convert future tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api heta yamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි හෙට යමු.');
  });

  test('Pos_Fun_016: Convert plural subject', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api kaeema kanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි කෑම කනවා.');
  });

  test('Pos_Fun_017: Convert sentence with Tech term', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('Zoom meeting ekak thiyenavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('Zoom meeting එකක් තියෙනවා.');
  });

  test('Pos_Fun_018: Convert sentence with Place name', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api trip eka Kandy valata yamudha.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි trip එක Kandy වලට යමුද.');
  });

  test('Pos_Fun_019: Convert sentence with abbreviation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata OTP eka aavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට OTP එක ආවා.');
  });

  test('Pos_Fun_020: Convert currency and numbers', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('Rs. 5000 k dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('Rs. 5000 ක් දෙන්න.');
  });

  test('Pos_Fun_021: Convert date format', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    // වෙනස: "venida" -> "venidha"
    await inputBox.fill('adha 2026-05-21 venidha.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අද 2026-05-21 වෙනිදා.');
  });

  test('Pos_Fun_022: Convert with punctuation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('aayuboovan! kohomadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ආයුබෝවන්! කොහොමද?');
  });

  test('Pos_Fun_023: Convert repeated words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hari hari mama ennam.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('හරි හරි මම එන්නම්.');
  });

  test('Pos_Fun_024: Convert third person pronoun', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyaa heta enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එයා හෙට එනවා.');
  });


  // --- NEGATIVE TESTS (Logs only) ---

  test('Neg_Fun_001: Verify handling of mixed English words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('malli cricket gahanavaa.');
    await page.waitForTimeout(2000); 
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_001] Actual: ' + actualOutput);
  });

  test('Neg_Fun_002: Verify handling of joined words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mamagedharayanavaa');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_002] Actual: ' + actualOutput);
  });

  test('Neg_Fun_003: Verify handling of heavy slang', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('patta dial eka machan.');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_003] Actual: ' + actualOutput);
  });

  test('Neg_Fun_004: Verify handling of special chars', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ma@ga_gedar^a');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_004] Actual: ' + actualOutput);
  });

  test('Neg_Fun_005: Verify handling of missing vowels', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mm gdara ynva');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_005] Actual: ' + actualOutput);
  });

  test('Neg_Fun_006: Verify handling of ambiguous sounds', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama tea bonava.');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_006] Actual: ' + actualOutput);
  });

  test('Neg_Fun_007: Verify handling of numbers attached to text', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata100k dhenna.');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_007] Actual: ' + actualOutput);
  });

  test('Neg_Fun_008: Verify handling of unknown English words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama \'encyclopedia\' eka gaththa.');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_008] Actual: ' + actualOutput);
  });

  test('Neg_Fun_009: Verify handling of URLs', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('www.google.com ekata yanna.');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_009] Actual: ' + actualOutput);
  });

  test('Neg_Fun_010: Verify handling of random caps', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('MaMa GeDhaRa YaNaVaA');
    await page.waitForTimeout(2000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_010] Actual: ' + actualOutput);
  });

  test('Pos_UI_001: Verify real-time output update', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.pressSequentially('mama', { delay: 200 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
  });

});await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('savindu mage yaaluvaa');
await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
await page.getByLabel('Clear').click();