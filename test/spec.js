describe('should login, find elements and put product into the cart', function() {

    beforeAll(function () {
        let EC = protractor.ExpectedConditions;
        let login = element(by.xpath('.//body/descendant::a[@href="/login"][2]'));
        let registered_customer = element(by.xpath("/html/body/div[3]/div[2]/div[1]/div/div[2]/div/h1"));
        let email = element(by.id("UserName"));
        let password = element(by.id("Password"));
        let rememberMe = element(by.css("label[for=rememberMe]"));
        let submit = element(by.xpath('/html/body/div[3]/div[2]/div[1]/div/div[2]/div/div[2]/form/div[5]/button'));
        let logout = element(by.xpath('.//body/descendant::a[@href="/logout"][2]'));

        return Promise.resolve()
            .then(() => {
                return browser.get('http://foodbank.d5.aisnovations.com/');
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(login), 5000);
            })
            .then(() => {
                return expect(login.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return login.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(registered_customer), 5000);
            })
            .then(() => {
                return expect(registered_customer.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return email.sendKeys('m.kulsha@aisnovations.com');
            })
            .then(() => {
                return password.sendKeys('marina0708');
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(rememberMe), 5000);
            })
            .then(() => {
                return expect(rememberMe.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                rememberMe.click();
                return rememberMe.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(submit), 5000);
            })
            .then(() => {
                return expect(submit.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return submit.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(logout), 5000);
            })
            .then(() => {
                return expect(logout.isDisplayed()).toBeTruthy();
            });

    });

    afterAll(function () {
        console.log('Well done!!!!');
    });

    it('should see title, logo element and go to link', function () {
        let EC = protractor.ExpectedConditions;
        let logo = element(by.xpath('.//body/descendant::a[@href="/"][3]'));
        let elem = element(by.xpath('.//body/descendant::a[@href="/products?category=Aceon"][2]'));
        let title = element(by.xpath("//*[contains(text(), 'Products: Aceon')]"));

        return Promise.resolve()
           
            .then(() => {
                return browser.wait(EC.visibilityOf(logo), 5000);
            })
            .then(() => {
                return expect(logo.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(elem), 10000);
            })
            .then(() => {
                return expect(elem.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return elem.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(title), 5000);
            })
            .then(() => {
                return expect(title.isDisplayed()).toBeTruthy();
            });
    });

    it('should put product into the cart', function () {

        let EC = protractor.ExpectedConditions;
        let search = element(by.xpath('/descendant::input[@name="query"][2]'));
        let product = element(by.xpath('.//body/descendant::a[@href="/product?id=1131"][1]'));
        let product_title = element(by.xpath('/html/body/div[1]/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/h2'));
        let elem = element(by.css('.product-qty-input'));
        let add = element(by.css('button.btn:nth-child(2)'));
        let cart = element(by.xpath('.//body/descendant::a[@href="/cart"][2]'));
        let product_item = element(by.xpath('//body/descendant::a[@href="/product?id=1131"][2]'));

        return Promise.resolve()
            .then(() => {
                return browser.wait(EC.visibilityOf(search), 5000);
            })
            .then(() => {
                return search.sendKeys('amphetamine');
            })
            .then(() => {
                return search.sendKeys(protractor.Key.ENTER)
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(product), 5000);
            })
            .then(() => {
                return expect(product.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return product.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(product_title), 5000);
            })
            .then(() => {
                return expect(product_title.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(elem), 5000);
            })
            .then(() => {
                return expect(elem.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return elem.clear();
            })
            .then(() => {
                return elem.sendKeys('3');
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(add), 5000);
            })
            .then(() => {
                return expect(add.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return add.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(cart), 5000);
            })
            .then(() => {
                return expect(cart.isDisplayed()).toBeTruthy();
            })
            .then(() => {
                return cart.click();
            })
            .then(() => {
                return browser.wait(EC.visibilityOf(product_item), 5000);
            })
            .then(() => {
                return expect(product_item.isDisplayed()).toBeTruthy();
            });
    });
})





