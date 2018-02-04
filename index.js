const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
	headless: false
});
    const CREDS = require('./creds');
    const page = await browser.newPage();
    const USERNAME_SELECTOR = '#pseudo-form-sender > input';
    const PASSWORD_SELECTOR = '#pseudo-form-sender > input';
    const BUTTON_SELECTOR = '#pseudo-form-sender > button';
//    const PROJECT_SELECTOR = 'body > div.global-wrapper > div > div.page-container.page-dashboard > div > div > div > a:nth-child(INDEX) > div.project-card-header > div.project-card-title';
    const PROJECT_SELECTOR = 'body > div.global-wrapper > div > div.page-container.page-dashboard > div > div > div > a:nth-child(1)' 
    const LENGTH_SELECTOR_CLASS = 'project-card';
    const PROJECT_TITLE_SELECTOR = '#project-name';

    await page.goto('https://justdo.today'
//                networkIdleTimeout: 5000,
//                waitUntil: 'networkidle',
//                timeout: 100000
            );
//    await page.screenshot({ path: 'screenshots/justdo.png' });

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);
    await page.click(BUTTON_SELECTOR);

    await page.waitFor(2*1000);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);
    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();
    await page.waitFor(3*1000);
    let projectSelector = PROJECT_SELECTOR.replace("INDEX", 1);
    await page.click(projectSelector);
//    await page.waitForNavigation();

    await page.click(PROJECT_TITLE_SELECTOR);
    await page.waitFor(3*1000);

    await page.keyboard.type('NEW TITLE');   //It will put the new value in the middle.
    await page.keyboard.press('Enter');
    

    browser.close();
}

run();
