describe('our tests', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl')
    })
    
    it ('test1', () => {
        
        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER').click()

    })
})