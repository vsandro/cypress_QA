const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Locais de doação", () => {

    it("TC2 – Alterar local de doação #1", () => {
        login('beto@gmail.com', '123456');
        cy.get('[id=mnuStore]').click();       
        
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', '0001 - Apoio Braga').find('button').eq(1).click() 
            
        cy.get('[id=cboCity]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Barcelos").click()

        cy.get('[id=name]').clear().type('0001 - Apoio Braga Centro (alterado)');
        cy.get('[id=address]').clear().type('Rua ABCDEF, 290');      
        cy.get('[id=latitude]').clear().type(29);
        cy.get('[id=longitude]').clear().type(31);

        cy.get('[id=active]').uncheck();

        cy.get('[id=btnGravar]').click();
    });  

    it("TC2 – Alterar local de doação #2", () => {
        login('beto@gmail.com', '123456');
        cy.get('[id=mnuStore]').click();       
        
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', '0002 - Apoio Braga').find('button').eq(3).click() 
            
        cy.get('[id=cboCity]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Cascais").click()

        cy.get('[id=name]').clear().type('0002 - Apoio Braga Centro (alterado)');
        cy.get('[id=address]').clear().type('Av. Help, 2500');      
        cy.get('[id=latitude]').clear().type(16);
        cy.get('[id=longitude]').clear().type(21);

        cy.get('[id=active]').check();

        cy.get('[id=btnGravar]').click();
    }); 
})