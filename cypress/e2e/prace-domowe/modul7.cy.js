describe('praca domowa do modułu 7"', () => {
    it('przejscie na konkretną podstronę oraz zapisanie screenshota', function(){
        
        cy.visit('https://fabrykatestow.pl/')
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()
        cy.get('.elementor-element-4ee1fd56').contains('Kto nauczy Cię testów automatycznych?').scrollIntoView().should('be.visible')
        cy.get('.elementor-element-4ee1fd56').first().screenshot()
      
    })
})