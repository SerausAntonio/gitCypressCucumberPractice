
import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
before('Login Credentials',function(){
    cy.fixture('ConduitData.json').as('data');
})     
Given('I am on the Login page',function() {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
})
 
When('I login with valid credentials and clicked on sign in',function(dataTable){
    
    cy.get('input[type="email"]').type(dataTable.rawTable[1][0]);
    cy.get('input[type="password"]').type(dataTable.rawTable[1][1]);
    cy.get('button[type="submit"]').click()
})
 
And('I click on settings button',function(){
    cy.get('a[href="#settings"]').click()
})
 
And('I click on Logout button',function(){
    cy.contains('Or click here to logout.').click()
})
 
Then('I routed back to login page',function(){
    cy.title().should('eq','Conduit')
})