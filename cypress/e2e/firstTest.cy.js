/// <reference types="cypress"/>
describe("My first test",()=>{
    beforeEach('read data',function(){
        cy.fixture("example.json").as('DATA');
       // cy.log('DATA.name');
    })
    it("my first test",function(){
       cy.log(this.DATA.name);
       expect(this.DATA.name).equal('Using fixtures to represent data');
       expect(this.DATA.email).equal('hello@cypress.io'); 
       expect(this.DATA.body).equal('Fixtures are a great way to mock data for responses to routes'); 
    })

})