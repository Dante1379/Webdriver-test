
describe('github.com page', () => {

    // Title: Checking functionality of the button "Enterprise"
    // Steps to reproduce:
    // 1. Go to 'https://github.com/'
    // 2. Click to "Enterpise" button in the header of the main page
    // Expected result:
    // Open window with url 'https://github.com/enterprise'

    xit('should demonstrate the click command', async () => {
        await browser.url('https://github.com/');
        const enterpriseButton = await $('=Enterprise')
        enterpriseButton.click()
        await browser.pause(2000);
        await browser.url('https://github.com/enterprise')
        console.log(await browser.getUrl())
    })

    // Title: Checking functionality of input field
    // Steps to reproduce:
    // 1. Go to 'https://github.com/'
    // 2. Input text 'GITHUB CHECK DONE!' in the search input field on the main page
    // Expected result:
    // The search field displays the text  'GITHUB CHECK DONE!'
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://github.com/')
        let searchInput = await $('.header-search-input')
        await searchInput.addValue('GITHUB CHECK DONE!')
        let textInputSearch = await searchInput.getValue()
        await browser.pause(1000)
        console.log('SEACH INPUT FIELD:'+ JSON.stringify(textInputSearch))
        await browser.pause(1000);
    })

    // Title: Checking functionality of the button "Enterprise"
    // Steps to reproduce:
    // 1. Go to 'https://github.com/'
    // 2. Click to "Enterpise" button in the header of the main page
    // Expected result:
    // Open window with url 'https://github.com/enterprise'

    xit('should detect the focus of an element', async () => {
        await browser.url('https://github.com/');
        const selectBoxExplore = await $('//li[4]/details/summary');
        console.log("search.isFocused() before click:" + await selectBoxExplore.isFocused()); // outputs: false
        await selectBoxExplore.click();
        console.log("search.isFocused() after click:" + await selectBoxExplore.isFocused()); // outputs: true
        await browser.pause (2000)
        const exploreSkills = await $('=Skills')
        exploreSkills.click()
        await browser.pause (3000)
    })

    // Title: Checking functionality of the button "Enterprise"
    // Steps to reproduce:
    // 1. Go to 'https://github.com/'
    // 2. Click to "Enterpise" button in the header of the main page
    // Expected result:
    // Open window with url 'https://github.com/enterprise'

    xit('should demonstrate the getText function', async () => {
        await browser.url('https://github.com/');
        const linkToDevelop = await $('#home-develop')
        // scroll to specific element
        await linkToDevelop.scrollIntoView();
        await browser.pause(2000);
        console.log('Text for element' + await linkToDevelop.getText());
       
    })
    xit('should demonstrate the singIn command', async () => {
        await browser.url('https://github.com/');
        const singInButton = await $('=/login')
        singInButton.click()
        await browser.url('https://github.com/login')

        let userName = await $ ('#login_field')
        let userPassword = await $ ('#password')

        // random userName

        function randomUserName(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
        }
        
        // let randName = (Math.random()*10).toString(16).substring(7);
        // userName.addValue(randName)

        userName.addValue(randomUserName(12))
        let attrName = await userName.getValue()
        console.log('User name:'+ await attrName)

        // random password

        
        const randomPassword = (min,max) => {
            return Math.floor((Math.random())*(max-min)+max)
        } 
        userPassword.addValue(randomPassword(1, 100000))

        let attrPass = await userPassword.getValue()
        console.log('Password:'+ JSON.stringify(attrPass))
        await browser.pause(1000)

        const singIn = await $ ('//*[@id="login"]/div[4]/form/div/input[12]')
        singIn.click()
        await browser.pause(2000)

        const warningMessage = await $('//*[@id="js-flash-container"]/div/div')
        console.log('MESSAGE:'+ await warningMessage.getText())

    })
})


