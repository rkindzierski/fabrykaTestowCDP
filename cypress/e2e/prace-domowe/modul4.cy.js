describe('homework for modul4', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })
    
    it('search 5 elements by id', function(){
        cy.get('#menu-item-1871')
        cy.get('#menu-item-1692')
        cy.get('#menu-item-1023')
        cy.get('#menu-item-224')
        cy.get('#menu-item-238')
    })

    it('search 5 elemets by class', function(){
        cy.get('.header-menu-sidebar-overlay')
        cy.get('.elementor-button-link')
        cy.get('.neve-site-logo')
        cy.get('.menu-item-923')
        cy.get('.elementor-background-overlay')
    })

    it('search 5 elements by text', function(){
        cy.get('h2').contains('To tylko część z firm, których pracownicy szkolili się z naszych kursów')
        cy.get('h2').contains('SZKOŁa ONLINE DLA TESTERÓW')
        cy.get('span').contains('Krótkie, treściwe lekcje ')
        cy.get('h2').contains('Do tych kursów można przystąpić w dowolnym momencie. ')
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
    })

    it('search 5 elements by attribute', function (){
        cy.get('span[class="elementor-button-content-wrapper"]')
        cy.get('img[class="attachment-full size-full wp-image-1853"]')
        cy.get('div[id="header-menu-sidebar"]')
        cy.get('a[class="brand"]')
        cy.get('main[id="content"]')
    })
})