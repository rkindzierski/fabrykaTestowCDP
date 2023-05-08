const dateInput = 'input[type=date]'

class DatePickerPage{
    typeByHand(){
        cy.get(dateInput).click().clear().type('2020-06-09').should('have.value', '2020-06-09')
    }
    selectByIcon(){
        cy.get(dateInput).click('right')
    }
}

export default DatePickerPage;