import { expect } from 'chai'
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
        // Verify screen
        expect('Student Registration Form').to.exist

        cy.get(elements.TXT_FIRST_NAME).click().type('test')
        cy.get(elements.TXT_LAST_NAME).click().type('satu')
        cy.get(elements.BTN_GENDER_MALE).click()
        cy.get(elements.TXT_MOBILE_NUMBER).click().type('08123459876')
        cy.get(elements.TXT_DOB).click().type('12 Dec 1990')
        cy.get(elements.BTN_SUBJECT).click().type('M').contains('Maths').click()
        cy.get(elements.BTN_HOBBIES_SPORTS).click()
        cy.get(elements.BTN_PICTURE).attachFile('foto1.jpg')
        cy.wait(3000)
        cy.get(elements.TXT_CURRENT_ADDRESS).click().type('Jalan situsaja 4')
        cy.get(elements.BTN_STATE).click()
        cy.get(elements.BTN_STATE_LIST).contains('NCR').click()
        cy.get(elements.BTN_CITY).click()
        cy.get(elements.BTN_CITY_LIST).contains('Delhi').click()
        cy.get(elements.BTN_SUBMIT).click()
    })
})