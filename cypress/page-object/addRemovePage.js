const addElement = '[onclick="addElement()"]'
const removeElement = '.added-manually'
const checkElement = '#elements'

class AddRemoveElementPage{
    addAndRemoveElement(){
        cy.get(addElement).click()
        cy.get(checkElement).should('have.length', 1)
        cy.get(removeElement).click()
        cy.get(checkElement).should('not.have.length')
    }

    multipleAddAndRemoveElement(){
        cy.get(addElement).click().click().click()
        cy.get(removeElement).should('have.length', 3).click({multiple: true}).should('not.have.length')
    }
}

export default AddRemoveElementPage;