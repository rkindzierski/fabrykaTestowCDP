const url = 'http://simpletestsite.fabrykatestow.pl'
const iframeHeader = '#iframe-header'
const iframe = 'iframe'
const button = '#simpleButton1'


describe('my first scenario', () => {
    it('', function (){
        cy.visit(url)

        cy.get(iframeHeader).click()

        const  iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(button).click()
    })
})