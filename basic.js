const assert = require('assert')

describe('webdriver.io page', () => {
    xit('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    it('should demonstrate the addValue command', async () => {
        browser.url('https://v5.webdriver.io')
        let input = await $('#search_input_react')
        await input.addValue('test')
        await input.addValue(123)
        await browser.pause(2000);
        let value = await input.getValue()
        console.log('TEXT:  ' + await value)
        console.log("Assertion:  " + assert.equal(value, 'test123')) // true
       
    })
    xit('should set value for a certain element', () => {
        browser.url('https://v5.webdriver.io');
        const elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
        console.log(elem.getValue()); // outputs: 'test123'
    });

    it('should demonstrate the click command', async () => {
        await browser.url('https://v5.webdriver.io');
        browser.pause(2000);
        const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        guideButton.click()
        browser.pause(2000);
        const text = await guideButton.getText()
        console.log("Text: " + await text)
        assert(text === 'Guide') // true
    })
 

    xit('should demonstrate the getAttribute command', async () => {
        await browser.url('https://v5.webdriver.io');
        const input = await $('#search_input_react')
        let attr = await input.getAttribute('title')
        console.log("Title attribute is:" + await attr) // outputs: "Search"

        await input.setValue('test123');
        attrib = await input.getAttribute('value')
        console.log("Value attribute is:" + await attrib) // outputs: "test123"

    })

    xit('should demonstrate the getLocation function', async () => {
        await browser.url('https://v5.webdriver.io');
        const logo = await $('#search_input_react')
        const location = await logo.getLocation();
        console.log("!!!!!!!!!!!!!!!!!!!\n" + JSON.stringify(location)); 
    
        const xLocation = await logo.getLocation('x')
        console.log('xLocation' + xLocation); 
    
        const yLocation = await logo.getLocation('y')
        console.log('yLocation' + yLocation); 
    });

    xit('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('=Blog')
        console.log('Text for element:' + await blogButton.getText());
    
    });

})

