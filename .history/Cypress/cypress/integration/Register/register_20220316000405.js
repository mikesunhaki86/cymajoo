import { expect } from 'chai'
import elements from '../../support/register-elements'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
before( () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.wait(5000)
})

describe('Register', () => {
    it('As a user, i want to register as valid Student', () => {
        // Verify screen
        expect('Student Registration Form').to.exist

        cy.get(elements.TXT_FIRST_NAME).click().type('test')
        cy.get(elements.TXT_LAST_NAME).click().type('satu')
        // Fill first name and last name field

        cy.get(elements.TXT_EMAIL).click().type('testsatu@gmail.com')

        cy.get(elements.BTN_GENDER_MALE).click()
        // Select student genders
        // BTN_GENDER_FEMALE for Female gender
        // BTN_GENDER_OTHER for Other gender

        cy.get(elements.TXT_MOBILE_NUMBER).click().type('08123459876')
        // Fill mobile number field

        cy.get(elements.TXT_DOB).click()
        cy.get(elements.BTN_MONTH).select('April')
        cy.get(elements.BTN_YEAR).select('1991')
        cy.get(elements.BTN_DATE).click()
        // Select DoB

        cy.get(elements.BTN_SUBJECT).click().type('M')
        cy.get(elements.BTN_SELECT_SUBJECT).contains('Maths').click()
        // Select student Subject

        cy.get(elements.BTN_HOBBIES_SPORTS).click()
        // Select student Hobbies
        // BTN_HOBBIES_MUSIC for select music
        // BTN_HOBBIES_READING for select reading

        const filepath = 'foto1.jpg'
        cy.get(elements.BTN_PICTURE).attachFile(filepath)
        // Add student photo
        cy.wait(3000)

        cy.get(elements.TXT_CURRENT_ADDRESS).click().type('Jalan situsaja 4')
        // Fill student current address field

        cy.get(elements.BTN_STATE).click()
        cy.get(elements.BTN_STATE_LIST).contains('NCR').click()
        // Select State dropdown

        cy.get(elements.BTN_CITY).click()
        cy.get(elements.BTN_CITY_LIST).contains('Delhi').click()
        // Select City dropdown

        cy.get(elements.BTN_SUBMIT).click()
        cy.wait(2000)
        cy.screenshot('Success')
        cy.get(elements.BTN_CLOSE).click()
    })
})