

describe('webdriver.io page', () => {

    it('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const introduction = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[1]/ul/li/a')
        const WebdriverProtocol = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[1]/a')
        const appium = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[3]/a')
        const jsonWireProtocol = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[3]/a')
        const mobilJsonWireProtocol = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[4]/a')
        const Chromium = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[5]/a')
        const sauseLabs = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[6]/a')
        const seleniumStandalone = await $('//*[@id="docsNav"]/nav/div/section/div[2]/div[2]/ul/li[7]/a')
        const appiumText = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[1]/a[2]')
        const v4webdriverIo = await $('=v4.webdriver.io')
        const contribute = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[1]/a[2]')
        const firstParagraph = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[2]')

        const gettingStartedFooter = await $('#footer > section.sitemap > div:nth-child(2) > a:nth-child(2)')
        await gettingStartedFooter.scrollIntoView();

        const apiReferenceFooter = await $('#footer > section.sitemap > div:nth-child(2) > a:nth-child(3)')
        const helpFooter = await $('#footer > section.sitemap > div:nth-child(2) > a:nth-child(4)')
        const stackOverflowFooter = await $('#footer > section.sitemap > div:nth-child(3) > a:nth-child(2)')
        const supportChatFooter = await $('#footer > section.sitemap > div:nth-child(3) > a:nth-child(3)')
        const twitterFooter = await $('#footer > section.sitemap > div:nth-child(3) > a:nth-child(4)')
        const blogfooter = await $('#footer > section.sitemap > div:nth-child(4) > a:nth-child(2)')
        const gitHubFooter = await $('#footer > section.sitemap > div:nth-child(4) > a:nth-child(3)')
        const starFooter = await $('#footer > section.sitemap > div:nth-child(4) > a:nth-child(4)')

        await browser.pause(1000)


        console.log('Text for element:  ' + await introduction.getText());
        console.log('Text for element:  ' + await WebdriverProtocol.getText());
        console.log('Text for element:  ' + await appium.getText());
        console.log('Text for element:  ' + await jsonWireProtocol.getText());
        console.log('Text for element:  ' + await mobilJsonWireProtocol.getText())
        console.log('Text for element:  ' + await Chromium.getText())
        console.log('Text for element:  ' + await sauseLabs.getText())
        console.log('Text for element:  ' + await seleniumStandalone.getText())
        console.log('Text for element:  ' + await appiumText.getText()) 
        console.log('Text for element:  ' + await v4webdriverIo.getText())
        console.log('Text for element:  ' + await contribute.getText())
        console.log('Text for element:  ' + await firstParagraph.getText())

        console.log('Text for element:  ' + await gettingStartedFooter.getText())
        console.log('Text for element:  ' + await apiReferenceFooter.getText())
        console.log('Text for element:  ' + await helpFooter.getText())
        console.log('Text for element:  ' + await stackOverflowFooter.getText())
        console.log('Text for element:  ' + await supportChatFooter.getText())
        console.log('Text for element:  ' + await twitterFooter.getText())
        console.log('Text for element:  ' + await blogfooter.getText())
        console.log('Text for element:  ' + await gitHubFooter.getText())
        console.log('Text for element:  ' + await starFooter.getText())









    })

})