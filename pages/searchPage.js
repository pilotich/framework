const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SearchPage extends BasePage {

    static SEARCH_VALUE_RESULT = `//*[@id="digi-shield"]/div[2]/div[1]/div/div/h1`;
    static INVALID_SEARCH_VALUE_RESULT = `//*[@id="digi-shield"]/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/h2`;
    static CLOSE_REC_XPATH = '//*[@id="popmechanic-form-49151"]/div[2]';

    async getValidResults(){
        logger.info("Get info about result");
        const element = await this.findByXpath(SearchPage.SEARCH_VALUE_RESULT);
        return element.getText();
    }

    async getInvavidResult() {
        logger.info("Get info about result");
        const element = await this.findByXpath(SearchPage.INVALID_SEARCH_VALUE_RESULT);
        return element.getText();
    }

    async closeRecomedations() {
        logger.info("Close spam adv.(London is blue!)");
        const element = await this.findByXpath(SearchPage.CLOSE_REC_XPATH);
        await element.click();
        return this;
    }
}


module.exports = SearchPage;