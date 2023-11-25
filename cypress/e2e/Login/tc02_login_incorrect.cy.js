const login = require("../utils/login"); 

/// <reference types="cypress" />

describe("Login do utilizador", () => {

    it("TC2 - Login incorreto #1", () => {
        login('beto@gmail.com', '123');
      
        cy.get('[id=swal2-html-container]').should('have.text', 'Email ou Password incorretos');
    });    

    it("TC2 - Login incorreto #2", () => {
        login('ana.silva@gmail.com', '123456');
      
        cy.get('[id=swal2-html-container]').should('have.text', 'Email ou Password incorretos');
    });   

});