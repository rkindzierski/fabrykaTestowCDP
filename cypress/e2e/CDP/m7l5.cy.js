import HomePage from "../../page-object/homePage";
import InputPage from "../../page-object/inputPage";
import CheckboxPage from "../../page-object/checkboxPage";
import DropdownListPage from "../../page-object/dropdownListPage";
import HoversPage from "../../page-object/hoversPage";

describe('my first scenario', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('test inputs', function () {
        const homePage = new HomePage();
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeLettersIntoField()
        inputPage.typeNumberIntoField()
    })

    it('test checkbox', function () {
        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFistCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    it('test dropdown list', function () {
        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', function () {
        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

})