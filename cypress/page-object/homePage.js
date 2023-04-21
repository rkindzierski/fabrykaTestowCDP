import Urls from "./urls";

const clickInputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'

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
}


export default HomePage;