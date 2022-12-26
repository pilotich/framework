const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const LocationPage = require("../pages/locationPage");
const BasePage = require("../pages/basePage");

describe('Find stores by region and city', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('location.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })
  
    beforeEach(async function () {
      this.driver = await Driver.createDriver();
    });

    it('Get result of search by location', async function () {
        const locationPage = new LocationPage(this.driver);
        await locationPage.openPage();
        await locationPage.clickFindRegion();
        await locationPage.clickChooseRegion();
        await locationPage.clickFindCity();
        await locationPage.clickChooseCity();      
        expect(await locationPage.getResult()).to.contain(this.result);
          
    }).timeout(Constants.TEST_TIMEOUT);

    afterEach(async function () {
        await new Promise((resolve) => {
          setTimeout(async () => {
            resolve();
          }, 100);
        })
        await this.driver.quit();
      })
});