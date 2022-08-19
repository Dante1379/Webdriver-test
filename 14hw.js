const assert = require('assert')
"scripts"
describe('webdriver.io page', () => {
    
    it ('should open a new tab', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const input = await $('#search_input_react')
        let attr = await input.getAttribute('=JSONWire protocol')
        console.log("Get attribute is: " + await attr) // outputs: "Search"
        await browser.pause (2000);

        await browser.newWindow('https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol')
        console.log(await browser.getTitle())
        await browser.pause (2000);

        let isBlogDisplayedInViewport = await $('#wiki-tab').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport:" + await isBlogDisplayedInViewport); // outputs: true
        await browser.pause(2000);

        await browser.switchWindow('API Docs')
        console.log(await browser.getTitle())
        
        await browser.waitUntil(() => {
            return $('.postHeaderTitle').isDisplayed();
            }, 2000, 'blog is not displayed')
            const titleApiDocs = await $('=API Docs')
        console.log('Text for element:' + await titleApiDocs.getText());

        const postHeaderTitle = await $ ('=API Docs')
        await postHeaderTitle.saveScreenshot('postHeaderTitle.png');

        let twitterButton = await $('=Twitter');
        let isDisplayed = await twitterButton.isDisplayed();
        console.log("IS DISPLAYED" + isDisplayed); // outputs: false

        let isTwitterDisplayedInViewport = await $('=Twitter').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport:" + isTwitterDisplayedInViewport); // outputs: false
        await browser.pause (2000);

        const twitterButtonFooter = await $('#footer [href="https://twitter.com/webdriverio"]');
        await browser.pause (2000);
        // scroll to specific element
        await twitterButtonFooter.scrollIntoView();
        await browser.pause (2000);

        let twitButtonfooter = await $('=Twitter');
        let istwitDisplayed = await twitButtonfooter.isDisplayed();
        console.log("IS DISPLAYED" + istwitDisplayed); // outputs: true

        let isTwitterfooterDisplayedInViewport = await $('=Twitter').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport:" + isTwitterfooterDisplayedInViewport); // outputs: true
        await browser.pause (1000);


        const helpButton = await $('=Help');
        console.log("Help.isFocused() before click:" + await helpButton.isFocused()); // outputs: false
        await browser.pause (2000)
        await helpButton.click();
        let element = await $('=Help');
        console.log('HelpButton is Selected:' + await element.isSelected()); // outputs: true
        console.log("Help.isFocused() after click:" + await helpButton.isFocused()); // outputs: true



        

        
    })  

})
