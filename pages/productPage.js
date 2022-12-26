const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class ProductPage extends BasePage {
    static PAGE_URL = 'https://tvoe.ru/product/pukhovik-bez-kapyushona-na-sintepone-chernyy-a9710/#1021044';
    static BAG_BUTTON_XPATH = '//*[@id="header"]/div/div[1]/div/div/div/div/div[5]/div[1]/div[2]/a/span';
    static ADD_TO_BUG_BUTTON_XPATH = '//*[@id="content"]/div[2]/div/div/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/div[3]/div/div[2]/span';
    static INCREMENT_COUNTER = '//*[@id="content"]/div[2]/div/div/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/div[3]/div/div[1]/div/span[2]';
    static DECREMENT_COUNTER = '//*[@id="content"]/div[2]/div/div/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/div[3]/div/div[1]/div/span[1]';

    openPage = async () => super.openPage(ProductPage.PAGE_URL);

    async getProductName() {
        logger.info("Get product name.");
        return this.findByXpath(ProductPage.PRODUCT_NAME_XPATH);
    }

    async clickBagButton() {
        logger.info("Click bag button");
        const element = await this.findByXpath(ProductPage.BAG_BUTTON_XPATH)
        await element.click();
        await this.driver.sleep(5000);
        return this;
      }

    async addProductToBag() {
        logger.info("Add product to the bag");
        const element = await this.findByXpath(ProductPage.ADD_TO_BUG_BUTTON_XPATH)
        await element.click();
        await this.driver.sleep(5000);
        return this;
    }

    async clickIncrementButton() {
        logger.info("Click increment button");
        const element = await this.findByXpath(ProductPage.INCREMENT_COUNTER)
        await element.click();
        await this.driver.sleep(5000);
        return this;
    }

      async clickDecrementButton() {
        logger.info("Click decrement button");
        const element = await this.findByXpath(ProductPage.DECREMENT_COUNTER)
        await element.click();
        await this.driver.sleep(5000);
        return this;
    }
}

    module.exports = ProductPage;