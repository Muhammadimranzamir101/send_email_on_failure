# Automated Email Notification on Test Failure

This project demonstrates how to automate the sending of an email notification when a Playwright test case fails. It uses Nodemailer for sending emails and Playwright for web testing.

## Create APP Password

To enable secure email sending through Gmail, follow these steps:

1. Visit your Google Account settings by going to https://myaccount.google.com/.

2. In the left-hand navigation pane, click on "Security."

3. Under "Signing in to Google," locate the "App Passwords" section and click on "App passwords."

3. You may need to sign in with your Google account credentials if you're not already signed in.

4. In the "App Passwords" section, select "Mail" as the app and "Other (Custom Name)" as the device. Click "Generate."

5. Google will provide you with a unique 16-character "App Password."

## Setup

1. Install Node.js if you haven't already. You can download it from [nodejs.org](https://nodejs.org/).

2. Clone this repository to your local machine.

3. Install project dependencies by running the following command in your project directory:

   npm install

## Running the Test

1. Update the email credentials and recipient information in test_data/data.json with your Gmail credentials(App

Password) and recipient email address.

2. Run the Playwright test script using the following command.

    npx playwright test --project="Browser_Name" (chromium, firefox, webkit)