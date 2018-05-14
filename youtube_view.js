import {
    Agent
} from 'https';

const puppeteer = require('puppeteer');
const faker = require('faker');



(async () => {
    //while (true){
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    try {

        await page.goto('https://www.youtube.com/watch?v=zIE-qPi_OrI&feature=youtu.be');
        console.log("Start Video");
        await page.waitFor(65 * 1000);
        await page.close();

       
        await browser.close();
    } catch (e) {
        console.log(e);
        await browser.close();
    }


    //}

    // await page.click(SELECTORS.USERNAME_SELECTOR);
    // await page.keyboard.type(CREDS.username);
    // await page.click(SELECTORS.BUTTON_SELECTOR);

    // await page.waitFor(2*1000);
    // await page.click(SELECTORS.PASSWORD_SELECTOR);
    // await page.keyboard.type(CREDS.password);
    // await page.click(SELECTORS.BUTTON_SELECTOR);

    // await page.waitForNavigation();
    // await page.waitFor(4*1000);  //For waiting redirecting from justdo.today to app.justdo.today
    // let projectSelector = SELECTORS.PROJECT_SELECTOR.replace("INDEX", 1);
    // await page.click(projectSelector);

    // await page.click(SELECTORS.PROJECT_TITLE_SELECTOR);
    // await page.waitFor(3*1000);

    // await page.keyboard.type('NEW TITLE');   //It will put the new value in the middle.
    // await page.keyboard.press('Enter');

    // await page.click(SELECTORS.PROJECT_SETTING_SELECTOR);
    // await page.click(SELECTORS.PROJECT_CONFIG_SELECTOR);
    // await page.click(SELECTORS.PROJECT_CONFIG_PROJECTTIMELINE_SELECTOR);
    // await page.waitForNavigation(); 


    //await browser.close(); //End of function
})();

