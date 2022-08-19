const assert = require('assert')

describe('webdriver.io page', () => {
    xit('should demonstrate the click command', async () => {
        await browser.url('https://v5.webdriver.io')
        const apiButton = await $('=API')
        browser.pause(2000);
        apiButton.click()
        browser.pause(4000);
        await browser.url('https://v5.webdriver.io/docs/api.html')
        console.log(await browser.getUrl())
    })
    xit('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const elemApi = await $('=API Docs')
        browser.pause(2000);
        console.log('Text for element' + await elemApi.getText());
    })

    xit('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const linkToJsonWire = await $('=JSONWire protocol')
        browser.pause(2000);
        console.log('Text for element' + await linkToJsonWire.getText());
        console.log('Link for element' + await linkToJsonWire.getAttribute('href'));
        browser.pause(2000);
    })

    it('should demonstrate the addValue command', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html')
        let input = await $('#search_input_react')
        await input.addValue('test is' + ' ' + 'DONE!')
        console.log(JSON.stringify(input.addValue()))
        await browser.pause(1000);
    })



// The Next task is not a home work


    xit('should detect if an element is clickable', async () => {
        await browser.url('https://v5.webdriver.io')
        const blogButton = await $('=Blog')
        let clickable = await blogButton.isClickable();
        console.log("IS CLICKABLE" + clickable); // outputs: true or false
    
        // wait for element to be clickable
        await browser.waitUntil(() => blogButton.isClickable())
    });
    
    xit('should detect if an element is displayed', async () => {
        await browser.url('https://v5.webdriver.io')
        let blogButton = await $('=Blog');
        let isDisplayed = await blogButton.isDisplayed();
        console.log("IS DISPLAYED" + isDisplayed); // outputs: true
    })

    xit('should detect if an element is visible', async () => {
        await browser.url('https://v5.webdriver.io')
        let isBlogDisplayedInViewport = await $('=Blog').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport:" + isBlogDisplayedInViewport); // outputs: true

        let isGitHubDisplayedInViewport = await $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
        console.log("isGitHubDisplayedInViewport:" + await isGitHubDisplayedInViewport); // outputs: false
    })

    xit('should detect if an element is enabled', async () => {
        await browser.url('https://v5.webdriver.io');
        let blogButton = await $('=Blog')
        let isEnabled = await blogButton.isEnabled();
        console.log("isEnabled:" + await isEnabled); // outputs: true
    })

    xit('should detect the focus of an element', async () => {
        await browser.url('https://v5.webdriver.io');
        const loginInput = await $('#search_input_react');
        console.log("search.isFocused() before click:" + await loginInput.isFocused()); // outputs: false
        browser.pause (3000)
        await loginInput.click();
        console.log("search.isFocused() after click:" + await loginInput.isFocused()); // outputs: true
        browser.pause (3000)
    })

    xit('should demonstrate the scrollIntoView command', async () => {
        await browser.url('https://v5.webdriver.io');
        const gitHubLink = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause (5000);
        // scroll to specific element
        await gitHubLink.scrollIntoView();
        browser.pause (5000)
    });

    xit('should save a screenshot of the browser view', async () => {
        await browser.url('https://v5.webdriver.io');
        const gitHubLink = $ ('#footer [href="https://github.com/webdriverio/webdriverio"]')
        await gitHubLink.saveScreenshot('gitHubLink.png');
    });

    xit('should open a new tab', async () => {
        // open url
        await browser.url('https://www.google.com')
        console.log(await browser.getTitle()) // outputs: "Google"
        // create a new window
        await browser.newWindow('https://webdriver.io')
        await browser.pause (3000)
        console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
        await browser.pause (3000)

        await browser.switchWindow('google.com')
        await browser.pause (3000)
        await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
        await browser.pause (3000)

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle()) // outputs: "Google"
    });

    xit('should wait until', async () => {
        await browser.url('https://v5.webdriver.io');
        await browser.waitUntil(() => {
        return $('=Blog').isDisplayed();
        }, 5000, 'blog is not displayed')
    });

    xit('should get html for certain elements', async () => {
        await browser.url ('https://v5.webdriver.io/docs/api.html')
        var outerHTML = await $('.siteNavGroupActive').getHTML();
        console.log('outerHTML' + await outerHTML);
        // outputs:
        // "<div id="test"><span>Lorem ipsum dolor amet</span></div>"
    
        var innerHTML = await $('.siteNavGroupActive').getHTML(false);
        console.log('innerHTML' + await innerHTML);
        // outputs:
        // "<span>Lorem ipsum dolor amet</span>"
    });
})