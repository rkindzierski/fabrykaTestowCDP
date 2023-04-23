const usernameAuth = '#ba_username'
const passwordAuth = '#ba_password'
const loginButton = '#content > button'


class BasicAuthPage {
    fillBasicAuthAndLogin(){
        cy.get(usernameAuth).clear().type('admin')
        cy.get(passwordAuth).clear().type('admin')
        cy.get(loginButton).click()
        cy.get('#loggedInMessage').should('have.text', 'You are logged in!')
    }
}

export default BasicAuthPage;