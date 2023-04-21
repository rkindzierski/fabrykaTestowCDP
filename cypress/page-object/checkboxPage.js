const checkbox = 'input[type="checkbox"]'

class CheckboxPage{
    checkFistCheckbox(){
        cy.get(checkbox).first().check().should('be.checked')
    }

    uncheckLastCheckbox(){
        cy.get(checkbox).last().uncheck().should('not.be.checked')
    }
}

export default CheckboxPage;