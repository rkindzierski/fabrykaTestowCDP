describe('my first scenario', () => {
    it('visit main page and click top menu button', function(){
        cy.visit('https://fabrykatestow.pl')

        // cy.get('#nv-primary-navigation-main').contains('Newsletter').click()

        cy.getAllCookies()
        cy.getCookies()
        cy.getCookie('_gid')
        const a = cy.getAllLocalStorage()

        console.log(a)

        // cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')

        // cy.wait(2000)
        // cy.go('back')

        // cy.wait(2000)
        // cy.go('forward')

        // cy.wait(2000)
        // cy.go(-1)
    })
})