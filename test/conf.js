exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    Capabilities:
    {
    'browserName': 'chrome'
    },

    onPrepare: function(){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },
       jasmineNodeOpts:{
        showColor:true,
        defaultTimeoutInterval: 120000
    }
};