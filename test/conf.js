exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    Capabilities:
    {
    'browserName': 'chrome'
    },

    onPrepare: function(){
        browser.driver.manage().window().setSize(1000,600);
    },
    jasmineNodeOpts:{
        showColor:true
    }
};