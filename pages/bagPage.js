const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class BagPage extends BasePage {
    
    static PRODUCT_NAME_XPATH = `//div[@class='cart-item__title']`;
    static PRODUCT_PRICE_XPATH = `//div[@class='cart-item__price-item price']`;
    static INPUT_SALE_CODE_XPATH = '//*[@id="app"]/div[2]/div/div/div[2]/div/div[1]/div[2]/div[1]/input';
    static PRODUCT_SALE_XPATH = `//*[@id="app"]/div[2]/div/div/div[2]/div/div[2]/div[1]/div[2]/span[1]`;
    static BUTTON_SALE_CODE_XPATH = '//*[@id="app"]/div[2]/div/div/div[2]/div/div[1]/div[2]/div[1]/button';
    // static QTY_XPATH = `//*[@id="rptCart_ctl00_quantityDiv"]/div`;
    // static QUANTITY_INPUT_XPATH = `document.querySelector("#rptCart_ctl00_ddlQuantity")`
    static COUNT_ITEMS_XPATH = '//*[@id="app"]/div[2]/div/div/div[2]/div/div[2]/div[1]/div[1]/span[1]';

    async getProductName() {
        logger.info("Get the product name.");
        return this.findByXpath(BagPage.PRODUCT_NAME_XPATH);
      }

    async getProductPrice() {
        logger.info("Get the product price.");
        const element = await this.findByXpath(BagPage.PRODUCT_PRICE_XPATH);
        return element.getText();
      }
    
      async getProductSale() {
        logger.info("Get the product sale.");
        const element = await this.findByXpath(BagPage.PRODUCT_PRICE_XPATH);
        return element.getText();
      }

      async inputSearchValue(textToSeacrh) {
        logger.info("Enter text and click Enter");
        const element = await this.findByXpath(BagPage.INPUT_SALE_CODE_XPATH);
        await element.sendKeys(textToSeacrh, Key.ENTER);
        return this;
      }

      async clickSaleButton() {
        logger.info("Click the use-sale button");
        const element = await this.findByXpath(BagPage.BUTTON_SALE_CODE_XPATH)
        await element.click();
        await this.driver.sleep(5000);
        return this;
      }

      async getProductCount() {
        logger.info("Get the count value.");
        const element = await this.findByXpath(BagPage.COUNT_ITEMS_XPATH);
        return element.getText();
      }
}

module.exports = BagPage;