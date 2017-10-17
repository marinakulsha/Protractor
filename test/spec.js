describe('Find elements on Homepage and login', function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);

    let EC = protractor.ExpectedConditions;
    let logo = element(by.xpath('.//body/descendant::a[@href="/"][3]'));
    let elem = element(by.xpath('.//body/descendant::a[@href="/products?category=Aceon"][2]'));
    let title = element(by.xpath("//*[contains(text(), 'Products: Aceon')]"));
    let login = element(by.xpath('.//body/descendant::a[@href="/login"][2]'));
    let registered_customer = element(by.xpath("/html/body/div[3]/div[2]/div[1]/div/div[2]/div/h1"));
    let email = element(by.id("UserName"));
    let password = element(by.id("Password"));
    let rememberMe = element(by.css("label[for=rememberMe]"));
    let submit = element(by.xpath('/html/body/div[3]/div[2]/div[1]/div/div[2]/div/div[2]/form/div[5]/button'));
    let logout = element(by.xpath('.//body/descendant::a[@href="/logout"][2]'));

 beforeAll(function() {
    browser.driver.manage().window().maximize();
 });

 afterAll(function() {
     console.log('Well done!!!!');
 });

    it('should have a title', function() {
        browser.get('http://foodbank.d5.aisnovations.com/');
        expect(browser.getTitle()).toEqual('FoodBank - FoodBank');
    });

    it('should see logo element', function() {
        browser.wait(EC.visibilityOf(logo), 5000);
        expect(logo.isDisplayed()).toBeTruthy();
    }) ;

    it('should click Aceon link', function() {
        browser.wait(EC.visibilityOf(elem), 10000);
        expect(elem.isDisplayed()).toBeTruthy();
        elem.click();
        });

    it('should see Products: Aceon title', function() {
        browser.wait(EC.visibilityOf(title), 5000);
        expect(title.isDisplayed()).toBeTruthy();
    }) ;

    it('should click login button', function() {
        browser.wait(EC.visibilityOf(login), 5000);
        expect(login.isDisplayed()).toBeTruthy();
        login.click();
    });

    it('should see Registered Customer title', function() {
        browser.wait(EC.visibilityOf(registered_customer), 5000);
        expect(registered_customer.isDisplayed()).toBeTruthy();
    }) ;

    it('should input Email and Password', function() {
        browser.wait(EC.visibilityOf(email), 5000);
        email.sendKeys('m.kulsha@aisnovations.com');
        browser.wait(EC.visibilityOf(password), 5000);
        password.sendKeys('marina0708');
    });

    it('should click RememberMe on this computer', function() {
        browser.wait(EC.visibilityOf(rememberMe), 5000);
        expect(rememberMe.isDisplayed()).toBeTruthy();
        rememberMe.click();
        rememberMe.click();
    });

    it('should click Submit button', function() {
        browser.wait(EC.visibilityOf(submit), 5000);
        expect(submit.isDisplayed()).toBeTruthy();
        submit.click();
    });

     it('should see log out title', function() {
         browser.wait(EC.visibilityOf(logout), 5000);
         expect(logout.isDisplayed()).toBeTruthy();
     });
    });

describe('Put product into the cart', function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);

    beforeAll(function () {
        browser.driver.manage().window().maximize();
    });

    afterAll(function () {
        console.log('Good job!!!!');
    });
    let EC = protractor.ExpectedConditions;
    let search = element(by.xpath('/descendant::input[@name="query"][2]'));
    let product = element(by.xpath('.//body/descendant::a[@href="/product?id=1131"][1]'));
    let product_title = element(by.xpath('/html/body/div[1]/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/h2'));
    let elem = element(by.css('.product-qty-input'));
    let add = element(by.css('button.btn:nth-child(2)'));
    let cart = element(by.xpath('.//body/descendant::a[@href="/cart"][2]'));
    let product_item = element(by.xpath('//body/descendant::a[@href="/product?id=1131"][2]'));

    it('should find amphetamine product', function() {
        browser.wait(EC.visibilityOf(search), 5000);
        search.sendKeys('amphetamine');
        search.sendKeys(protractor.Key.ENTER)
    });

    it('should click image of product', function() {
        browser.wait(EC.visibilityOf(product), 5000);
        expect(product.isDisplayed()).toBeTruthy();
        product.click();
    });
    it('should see amphetamine title', function() {
        browser.wait(EC.visibilityOf(product_title), 5000);
        expect(product_title.isDisplayed()).toBeTruthy();
    });

    it('should select 3 products', function() {
        browser.wait(EC.visibilityOf(elem), 5000);
        expect(elem.isDisplayed()).toBeTruthy();
        elem.clear();
        elem.sendKeys('3');
        });

     it('should click Add_to_cart button', function() {
        browser.wait(EC.visibilityOf(add), 5000);
        expect(add.isDisplayed()).toBeTruthy();
        add.click();
        });
    it('should click cart title', function() {
        browser.wait(EC.visibilityOf(cart), 5000);
        expect(cart.isDisplayed()).toBeTruthy();
        cart.click();
    });
    it('should see amphetamine item in cart', function() {
        browser.wait(EC.visibilityOf(product_item), 5000);
        expect(product_item.isDisplayed()).toBeTruthy();
    });
    });






