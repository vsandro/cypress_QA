const login = require("../utils/login"); 

/// <reference types="cypress" />

describe("Login do utilizador", () => {

    it("TC1 - Login com sucesso #1", () => {
        login('beto@gmail.com', '123456');

        cy.url().should('contain', '/home');
        cy.get('[id=perfil]').should('have.text', '(Administrador)');
    });    

    it("TC1 - Login com sucesso #2", () => {
        login('ana@gmail.com', '123456');

        cy.url().should('contain', '/home');
        cy.get('[id=perfil]').should('have.text', '(Gestor)');
    });    

});
