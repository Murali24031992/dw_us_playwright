import{test,expect}from'@playwright/test';
test('pdf upload test',async({page})=>{
await page.goto('https://www.ilovepdf.com/');
await expect(page).toHaveTitle('iLovePDF | Online PDF tools for PDF lovers');
await expect(page.locator('h1:has-text("Every tool you need to work with PDFs in one place")')).toBeVisible();
const wordToPdfLink = page.getByRole('link', { name: 'Word to PDF' });
await expect(wordToPdfLink).toBeVisible({ timeout: 10000 });
await Promise.all([
  page.waitForURL('**/word_to_pdf'),
  wordToPdfLink.click(),
]);
await expect(page).toHaveURL('https://www.ilovepdf.com/word_to_pdf');
await expect(page.locator('h1:has-text("Convert WORD to PDF")')).toBeVisible();
const filePath = './uploadfiles/Resume.docx';
const [fileChooser] = await Promise.all([
  page.waitForEvent('filechooser'),
  page.click('#pickfiles'),
]);
await fileChooser.setFiles(filePath);
// await page.pause();
await page.getByRole('button', { name: 'Convert to PDF' }).click();
await expect(page.locator('h1:has-text("WORD file has been converted to PDF")')).toBeVisible();
const downloadPath = './downloads/Resume.pdf';
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('id=pickfiles').click()
]);
await expect(download.suggestedFilename()).toMatch(/\.pdf$/);
await download.saveAs(downloadPath);
await expect(downloadPath).toMatch(/\.pdf$/);

// If the upload button is an input element you can also directly set files:
// await page.setInputFiles('input[type=file]', filePath);

});

