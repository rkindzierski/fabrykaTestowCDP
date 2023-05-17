import HomePage from "../../page-object/homePage";
import InputPage from "../../page-object/inputPage";
import CheckboxPage from "../../page-object/checkboxPage";
import DropdownListPage from "../../page-object/dropdownListPage";
import HoversPage from "../../page-object/hoversPage";
import BasicAuthPage from "../../page-object/basicAuthPage";
import FormPage from "../../page-object/formPage";
import KeyPressesPage from "../../page-object/keyPressesPage";
import DatePickerPage from "../../page-object/datePickerPage";
import AddRemoveElementPage from "../../page-object/addRemovePage";
import DragAndDropPage from "../../page-object/dragAndDropPage";
import StatusCodesPage from "../../page-object/statusCodesPage";
import IFramePage from "../../page-object/iframePage";

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

    it('test date picker', function () {
        const homePage = new HomePage();
        homePage.clickDatePicker()

        const datePickerPage = new DatePickerPage();
        datePickerPage.typeByHand()
        datePickerPage.selectByIcon()
    })

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

    it('test drag and drop elements', function () {
        const homePage = new HomePage();
        homePage.clickDragAndDrop()

        const dragAndDrop = new DragAndDropPage();
        dragAndDrop.dragElementA()
        dragAndDrop.dragElementB()
    })

    it('test add/remove elements', function () {
        const homePage = new HomePage();
        homePage.clickAddRemove()

        const addRemove = new AddRemoveElementPage();
        addRemove.addAndRemoveElement()
        addRemove.multipleAddAndRemoveElement()
    })

    it('test status codes', function (){
        const homePage = new HomePage();
        homePage.clickStatusCodes()

        const statusCodes = new StatusCodesPage();
        statusCodes.getStatus200()
        statusCodes.getStatus305()
        statusCodes.getStatus404()
        statusCodes.getStatus500()
    })

    it('test iframe', function(){
        const homePage = new HomePage();
        homePage.clickIframeHeader()

        const iFrameTest = new IFramePage();
        iFrameTest.pressButton1()
        iFrameTest.pressButton2()
    })
})