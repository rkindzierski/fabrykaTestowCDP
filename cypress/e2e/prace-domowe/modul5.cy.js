describe('praca domowa do modułu 5"', () => {
    it('przejscie na konkretną podstronę oraz zapisanie screenshota', function(){
        
        cy.visit('https://fabrykatestow.pl/')
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()
        cy.get('.elementor-element-2d7d28f4').contains('Kto nauczy Cię testów automatycznych?')
        cy.get('.elementor-element-2d7d28f4').first().screenshot()
      
    })
})