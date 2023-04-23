 const keyInput = '#target'
 const keyResult ='#keyPressResult'

 class KeyPressesPage{
    focusAndPressKey(){
        cy.get(keyInput).clear()
        cy.get(keyInput).type('T')
        cy.get(keyResult).should('have.text', 'You entered: T')

        cy.get(keyInput).clear()
        cy.get(keyInput).type('{del}')
        cy.get(keyResult).should('have.text', 'You entered: DELETE')

        cy.get(keyInput).clear()
        cy.get(keyInput).type('8')
        cy.get(keyResult).should('have.text', 'You entered: 8')
    }

 }

 export default KeyPressesPage;