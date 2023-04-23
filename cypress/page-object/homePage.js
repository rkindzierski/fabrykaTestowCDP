import Urls from "./urls";

const clickInputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keyHeader = '#keypresses-header'

class HomePage{
    clickInputsTab() {
        cy.get(clickInputsHeader).click()
    }

    clickCheckboxTab() {
        cy.get(checkboxHeader).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListHeader).click()
    }

    clickHoversTab() {
        cy.get(hoversHeader).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }

    clickBasicAuth() {
        cy.get(basicAuthHeader).click()
    }

    clickForm() {
        cy.get(formHeader).click()
    }

    clickKeyPresses() {
        cy.get(keyHeader).click()
    }
}


export default HomePage;