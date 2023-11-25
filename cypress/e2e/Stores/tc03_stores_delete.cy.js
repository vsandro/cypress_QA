const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Locais de doação", () => {

    it("TC3 – Excluir local de doação #1", () => {
        login('beto@gmail.com', '123456');
        cy.get('[id=mnuStore]').click();       
        
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', '0002 - Apoio Braga').find('button').eq(2).click();

        cy.get('.swal2-actions').should('contain', 'Sim').find('button').eq(0).click();
    }); 
})