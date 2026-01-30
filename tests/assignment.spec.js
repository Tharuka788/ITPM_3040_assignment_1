const { test, expect } = require('@playwright/test');

// Singlish Input කොටුව (Placeholder එකෙන් අල්ලමු, වඩා ලේසියි)
const INPUT_SELECTOR = 'textarea[placeholder="Type in Singlish..."]'; 
// (එහෙම නැත්නම් පරණ විදිහට 'textarea' කියලා තිබ්බත් කමක් නෑ)

// Sinhala Output කොටුව (Class නම හරහා අල්ලමු)
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';


test.describe('Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- POSITIVE TESTS ---

  test('Pos_Fun_001: Convert a simple daily sentence', async ({ page }) => {
    // Input එකට textarea එක හොයාගන්න බැරි නම්, පළවෙනි textarea එක ගන්නවා
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_001] Expected: මම ගෙදර යනවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_002: Convert a compound sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa, haebaeyi vahina nisaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_002] Expected: මම ගෙදර යනවා, හැබැයි වහින නිසා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_003: Convert a complex sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oya enavaanam mama balan innavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_003] Expected: ඔයා එනවානම් මම බලන් ඉන්නවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_004: Convert a question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaata kohomadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_004] Expected: ඔයාට කොහොමද? | Actual: ' + actualOutput);
  });

  test('Pos_Fun_005: Convert a command', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('vahaama enna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_005] Expected: වහාම එන්න. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_006: Convert a positive statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api heta enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_006] Expected: අපි හෙට එනවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_007: Convert a negative statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama ehema karannee naehae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_007] Expected: මම එහෙම කරන්නේ නැහැ. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_008: Convert a greeting', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('suba udhaeesanak!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_008] Expected: සුබ උදෑසනක්! | Actual: ' + actualOutput);
  });

  test('Pos_Fun_009: Convert a request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata udhavvak karanna puLuvandha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_009] Expected: මට උදව්වක් කරන්න පුළුවන්ද? | Actual: ' + actualOutput);
  });

  test('Pos_Fun_010: Convert a polite phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karuNaakaralaa mata eeka dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_010] Expected: කරුණාකරලා මට ඒක දෙන්න. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_011: Convert an informal phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eeyi, ooka dhiyan.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_011] Expected: ඒයි, ඕක දියන්. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_012: Convert a common expression', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata nidhimathayi.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_012] Expected: මට නිදිමතයි. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_013: Convert a multi-word phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('poddak inna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_013] Expected: පොඩ්ඩක් ඉන්න. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_014: Convert past tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama iiyee gedhara giyaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_014] Expected: මම ඊයේ ගෙදර ගියා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_015: Convert future tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api heta yamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_015] Expected: අපි හෙට යමු. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_016: Convert plural subject', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api kaeema kanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_016] Expected: අපි කෑම කනවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_017: Convert sentence with Tech term', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('Zoom meeting ekak thiyenavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_017] Expected: Zoom meeting එකක් තියෙනවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_018: Convert sentence with Place name', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api trip eka Kandy valata yamudha.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_018] Expected: අපි trip එක Kandy වලට යමුද. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_019: Convert sentence with abbreviation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata OTP eka aavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_019] Expected: මට OTP එක ආවා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_020: Convert currency and numbers', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('Rs. 5000 k dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_020] Expected: Rs. 5000 ක් දෙන්න. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_021: Convert date format', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ada 2026-05-21 venida.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_021] Expected: අද 2026-05-21 වෙනිදා. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_022: Convert with punctuation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('aayuboovan! kohomadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_022] Expected: ආයුබෝවන්! කොහොමද? | Actual: ' + actualOutput);
  });

  test('Pos_Fun_023: Convert repeated words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hari hari mama ennam.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_023] Expected: හරි හරි මම එන්නම්. | Actual: ' + actualOutput);
  });

  test('Pos_Fun_024: Convert third person pronoun', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyaa heta enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Pos_Fun_024] Expected: එයා හෙට එනවා. | Actual: ' + actualOutput);
  });


  // --- NEGATIVE TESTS ---

  test('Neg_Fun_001: Verify handling of mixed English words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('malli cricket gahanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_001] Expected: Mixed/Error | Actual: ' + actualOutput);
  });

  test('Neg_Fun_002: Verify handling of joined words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mamagedharayanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_002] Expected: Error/Joined | Actual: ' + actualOutput);
  });

  test('Neg_Fun_003: Verify handling of heavy slang', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('patta dial eka machan.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_003] Expected: Error/Slang | Actual: ' + actualOutput);
  });

  test('Neg_Fun_004: Verify handling of special chars', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ma@ga_gedar^a');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_004] Expected: Error/Chars | Actual: ' + actualOutput);
  });

  test('Neg_Fun_005: Verify handling of missing vowels', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mm gdara ynva');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_005] Expected: Error/Typos | Actual: ' + actualOutput);
  });

  test('Neg_Fun_006: Verify handling of ambiguous sounds', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama tea bonava.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_006] Expected: Error/Phonetic | Actual: ' + actualOutput);
  });

  test('Neg_Fun_007: Verify handling of numbers attached to text', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata100k dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_007] Expected: Error/Numbers | Actual: ' + actualOutput);
  });

  test('Neg_Fun_008: Verify handling of unknown English words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama \'encyclopedia\' eka gaththa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_008] Expected: Error/Transliteration | Actual: ' + actualOutput);
  });

  test('Neg_Fun_009: Verify handling of URLs', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('www.google.com ekata yanna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_009] Expected: Error/URL | Actual: ' + actualOutput);
  });

  test('Neg_Fun_010: Verify handling of random caps', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('MaMa GeDhaRa YaNaVaA');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    const actualOutput = await outputBox.innerText();
    console.log('[Neg_Fun_010] Expected: Error/Caps | Actual: ' + actualOutput);
  });


  // --- UI TEST ---
  
  test('Pos_UI_001: Verify real-time output update', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.pressSequentially('mama', { delay: 200 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
  });

});