const iFrame = 'iframe'
const iFrameButton1 = '#simpleButton1'
const iFrameButton2 = '#simpleButton2'
const pressedButtonCheck = '#whichButtonIsClickedMessage'
const iFrameContent = () => {
    return cy.get(iFrame)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
}

class IFramePage{
    pressButton1(){
        iFrameContent().find(iFrameButton1).click()
        iFrameContent().find(pressedButtonCheck).should('have.text', 'Button 1 was clicked!')
    }    

    pressButton2(){
        iFrameContent().find(iFrameButton2).click()
        iFrameContent().find(pressedButtonCheck).should('have.text', 'Button 2 was clicked!')
    }
}

export default IFramePage;