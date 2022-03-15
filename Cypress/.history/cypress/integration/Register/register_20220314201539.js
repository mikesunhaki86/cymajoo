import elements from '../../support/register-elements'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
before( () => {
    cy.visit('https://demoqa.com/')
    cy.wait(2000)
})

describe('Register', () => {
    it('As a user, i want to register as valid Student', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.wait(2000)
        // Verified screen
        cy.contains('Student Registration Form')
        
        cy.get(elements.BTN_DFTR_EMAIL).click().type('oto@mailinator.com')
        cy.get(elements.BTN_NO_HP).click().type('08111111111')
        cy.get(elements.BTN_DFTR_PASS).click().type('12341234')
        // Click Eye button
        cy.get(elements.BTN_EYE).click()
        cy.get(elements.BTN_DFTR_MASUK).click()
    })
})