const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class HomePage extends BasePage {
  static PAGE_URL = 'https://tvoe.ru';
  static BAG_BUTTON_XPATH = '//*[@id="header"]/div/div[1]/div/div/div/div/div[5]/div[1]/div[2]';
  static SEARCH_LOGO_XPATH = `//*[@id="header"]/div/div[1]/div/div/div/div/div[5]/div[3]/div/button`;
  static INPUT_SEARCH_VALUE_TEXT_XPATH = `//*[@id="digi-shield"]/div[2]/div/div/form/div/input`;


  openPage = async () => super.openPage(HomePage.PAGE_URL);

  async clickSearchButton() {
    logger.info("Click on the search button");
    const element = await this.findByXpath(HomePage.SEARCH_LOGO_XPATH)
    await element.click();
    return this;
  }

  async inputSearchValue(textToSeacrh) {
    logger.info("Enter text and click Enter");
    const element = await this.findByXpath(HomePage.INPUT_SEARCH_VALUE_TEXT_XPATH);
    await element.sendKeys(textToSeacrh, Key.ENTER);
    return this;
  }

  async clickBagButton() {
    logger.info("Click on the bag button");
    const element = await this.findByXpath(HomePage.BAG_BUTTON_XPATH)
    await element.click();
    return this;
  }
}

module.exports = HomePage;
