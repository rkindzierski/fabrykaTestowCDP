const figure = '.figure'
const figcaption = '.figcaption'

class HoversPage {
    hoverOverElement(){
        // cy.get(figure).first().trigger('mouseover')

        cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible')
    }
}
export default HoversPage;