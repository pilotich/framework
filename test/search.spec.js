const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const SearchPage = require('../pages/searchPage');
const HomePage = require("../pages/homePage");

describe('Search any product.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('search.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show "MUZ-TV" product.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.clickSearchButton();
        await homePage.inputSearchValue(this.validSearchValue);
        const searchPage = new SearchPage(this.driver);
        await searchPage.closeRecomedations();
        expect(await searchPage.getValidResults()).to.be.contain(this.validResult);

    }).timeout(Constants.TEST_TIMEOUT);


    it('Should show "asdasd" product.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.clickSearchButton();
        await homePage.inputSearchValue(this.invalidSearchBalue);
        const searchPage = new SearchPage(this.driver);
        await searchPage.closeRecomedations();
        expect(await searchPage.getInvavidResult()).to.be.contain(this.invalidResult);

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