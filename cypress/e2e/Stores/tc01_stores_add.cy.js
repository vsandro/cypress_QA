const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Locais de doação", () => {

    it("TC1 - Adicinar local de doação #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuStore]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuStore]').click();
        cy.get('[id=btnAdicionar]').click();

        cy.get('[id=cboCity]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Braga").click()

        cy.get('[id=name]').type('0001 - Apoio Braga Centro');
        cy.get('[id=address]').type('Rua ABC, 29');
        cy.get('[id=latitude]').type(28);
        cy.get('[id=longitude]').type(32);

        cy.get('[id=active]').check();

        cy.get('[id=btnGravar]').click();
    });

    it("TC1 - Adicinar local de doação #2", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuStore]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuStore]').click();
        cy.get('[id=btnAdicionar]').click();

        cy.get('[id=cboCity]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Braga").click()

        cy.get('[id=name]').type('0002 - Apoio Braga Norte');
        cy.get('[id=address]').type('Rua XYZ, 125');
        cy.get('[id=latitude]').type(31);
        cy.get('[id=longitude]').type(29);

        cy.get('[id=active]').uncheck();

        cy.get('[id=btnGravar]').click();
    });   
})