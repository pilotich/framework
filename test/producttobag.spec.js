const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const ProductPage = require("../pages/productPage");
const BagPage = require("../pages/bagPage");
const BasePage = require("../pages/basePage");


describe('Add product to the bag.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('clothes.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })
  
    beforeEach(async function () {
      this.driver = await Driver.createDriver();
    });

  it('Should show price in the bag', async function () {
      const productPage = new ProductPage(this.driver);
      await productPage.openPage();
      await productPage.addProductToBag();
      await productPage.clickBagButton();

      const bagPage = new BagPage(this.driver);
      expect(await bagPage.getProductPrice()).to.contain(this.productPriceValue)
        
  }).timeout(Constants.TEST_TIMEOUT);

  it('Should show price after used sale code', async function () {
    const productPage = new ProductPage(this.driver);
    await productPage.openPage();
    await productPage.addProductToBag();
    await productPage.clickBagButton();

    const bagPage = new BagPage(this.driver);
    await bagPage.inputSearchValue(this.productSaleCode);
    await bagPage.clickSaleButton();
    expect(await bagPage.getProductSale()).to.contain(this.productSaleValue)
      
  }).timeout(Constants.TEST_TIMEOUT);

  it('Should show counter of items', async function () {
    const productPage = new ProductPage(this.driver);
    await productPage.openPage();
    await productPage.clickIncrementButton();
    await productPage.clickIncrementButton();
    await productPage.clickDecrementButton();
    await productPage.addProductToBag();
    await productPage.clickBagButton();

    const bagPage = new BagPage(this.driver);
    expect(await bagPage.getProductCount()).to.contain(this.itemsCounterValue)
      
}).timeout(Constants.TEST_TIMEOUT);
  //
  afterEach(async function () {
    await new Promise((resolve) => {
      setTimeout(async () => {
        resolve();
      }, 100);
    })
    await this.driver.quit();
  })
});