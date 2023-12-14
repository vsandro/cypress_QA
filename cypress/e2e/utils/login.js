/// <reference types="cypress" />

module.exports = function login(email, password) {       
        cy.visit('http://localhost:3000');
        cy.get('[id=email]').type(email);
        cy.get('[id=password]').type(password);
        cy.get('[id=login]').click();                        
        cy.wait(5000)
}