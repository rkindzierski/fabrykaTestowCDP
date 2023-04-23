const formFirstName = '#fname'
const formLastName = '#lname'
const formSubmitButton ='#formSubmitButton'

class FormPage {
    fillFormAndSubmit(){
        cy.get(formFirstName).clear()
        cy.get(formLastName).clear()
        cy.get(formFirstName).type('BoB').should('have.value', 'BoB')
        cy.get(formLastName).type('Testovy').should('have.value', 'Testovy')
        cy.get(formSubmitButton).click()
        cy.on('window:alert', alertText => {
            expect(alertText).to.contain('success')
        })
    }
}

export default FormPage;