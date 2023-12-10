const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Locais de doação", () => {

    // it("TC5 – Excluir Itens #1", () => {
    //     login('beto@gmail.com', '123456');
    //     cy.get('[id=mnuItems]').click();       
        
    //     cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Camisola Verde XL - alterada').find('button').eq(2).click(); 
    //     cy.get('.swal2-actions').should('contain', 'Sim').find('button').eq(0).click(); 
    //     cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL - alterada').should('not.exist');
    // }); 
    it("TC6 – Excluir Itens #1", () => {
        login('beto@gmail.com', '123456');
        cy.get('[id=mnuItems]').click();       
        
         
        cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39 - alterada')
        .parents('.MuiDataGrid-row')
        .find('button:nth-child(1)')
        .click();

        cy.get('.swal2-actions').should('contain', 'Cancelar').find('button').eq(1).click({ force: true }); 
        // cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL - alterada');

        // cy.get('.swal2-actions').should('contain', 'Cancelar');
    }); 
})