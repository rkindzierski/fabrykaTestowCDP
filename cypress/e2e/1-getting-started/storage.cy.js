import "cypress-localstorage-commands"

describe('my first scenariu using storage', () => {
    it('work with local and sessio storage', function (){
        cy.clearAllLocalStorage()
    })
})