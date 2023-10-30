const { test, expect } = require('@playwright/test');
const { sendEmail } = require('../utility/mailer');

let result;

test('send email on failure', async ({page},testInfo) => {
  await page.goto('https://www.google.com');
  expect.soft(await page.title()).toEqual("Googled");
  result = testInfo.status;
  console.log(result);
});

test.afterAll(async () => {

  if(result=="failed")
  {
    try {
      await sendEmail(); 
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
});
