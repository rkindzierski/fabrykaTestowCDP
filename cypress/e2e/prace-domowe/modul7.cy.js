import HomePage from "../../page-object/homePage";
import InputPage from "../../page-object/inputPage";
import CheckboxPage from "../../page-object/checkboxPage";
import DropdownListPage from "../../page-object/dropdownListPage";
import HoversPage from "../../page-object/hoversPage";
import BasicAuth from "../../page-object/basicAuthPage";
import BasicAuthPage from "../../page-object/basicAuthPage";
import FormPage from "../../page-object/formPage";
import KeyPressesPage from "../../page-object/keyPressesPage";

describe('my first scenario', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('test checkbox', function () {
        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFistCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    // date picker

    it('test hover', function () {
        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

    it('test inputs', function () {
        const homePage = new HomePage();
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeLettersIntoField()
        inputPage.typeNumberIntoField()
    })

    it('basic login test', function () {
        const homePage = new HomePage();
        homePage.clickBasicAuth()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.fillBasicAuthAndLogin()
    })

    it('test form', function (){
        const homePage = new HomePage();
        homePage.clickForm()

        const formPage = new FormPage();
        formPage.fillFormAndSubmit()
    })

    it('test dropdown list', function () {
        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test key presses', function () {
        const homePage = new HomePage();
        homePage.clickKeyPresses()

        const keyPresses = new KeyPressesPage();
        keyPresses.focusAndPressKey()
    })

    // drag and drop

    // drop/remove element

    // status codes
   

})