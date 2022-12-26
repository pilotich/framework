const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class LocationPage extends BasePage {

    static PAGE_URL = 'https://tvoe.ru/contacts/';
    static FIND_REGION_XPATH = '//*[@id="content"]/div/div/div/div/div[1]/div/div/div[1]/div/div[1]/div/div[1]';
    static FIND_CITY_XPATH = '//*[@id="content"]/div/div/div/div/div[1]/div/div/div[1]/div/div[2]/div/div[1]/span';
    static CHOOSE_REGION_XPATH = '//*[@id="main"]/div[13]/div/div/ul/li[2]';
    static CHOOSE_CITY_XPATH = '//*[@id="main"]/div[13]/div/div/ul/li[2]';
    static RESULT_XPATH = '//*[@id="bx_3218110189_1276"]/h4';

    openPage = async () => super.openPage(LocationPage.PAGE_URL);

    async clickFindRegion() {
        logger.info("Click on menu with list of regions");
        const element = await this.findByXpath(LocationPage.FIND_REGION_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async clickChooseRegion() {
        logger.info("Choose region");
        const element = await this.findByXpath(LocationPage.CHOOSE_REGION_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async clickFindCity() {
        logger.info("Click on menu with list of cities");
        const element = await this.findByXpath(LocationPage.FIND_REGION_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async clickChooseCity() {
        logger.info("Choose city");
        const element = await this.findByXpath(LocationPage.FIND_REGION_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async getResult(result) {
        logger.info("Get result");
        const element = await this.findByXpath(LocationPage.RESULT_XPATH);
        return element.getText();
    }
}


module.exports = LocationPage;