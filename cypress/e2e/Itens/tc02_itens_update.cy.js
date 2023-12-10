const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Itens", () => {

   

    it("TC3 – Alterar um item com sucesso #1", () => {   
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
 
        cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39')
        .parents('.MuiDataGrid-row')
        .find('button:nth-child(2)')
        .click();


        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()
        cy.get('[id=description]').clear().type('Sapatos castanhos, 39 - alterada');
        cy.get('[id=name]').clear().type('Sapatos castanhos');  
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();
 
        cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39 - alterada')

       

    });

    it("TC3 – Alterar um item com sucesso #2", () => {   
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
 
        cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL')
        .parents('.MuiDataGrid-row')
        .find('button:nth-child(2)')
        .click();



        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()
        cy.get('[id=description]').clear().type('Camisola Verde XL - alterada');
        cy.get('[id=name]').clear().type('Camisola Verde');  
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();

        
        cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL - alterada')

    });

    it("TC4 – Alterar um item SEM sucesso #1", () => {   
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
 
        cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39')
        .parents('.MuiDataGrid-row')
        .find('button:nth-child(2)')
        .click();


        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()
        cy.get('[id=description]').clear();
        cy.get('[id=name]').clear().type('Sapatos castanhos');  
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();
        cy.get('#description')
        .next('span')
        .should('have.text', 'Preenchimento obrigatório');
 
        //cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39').should('not.exist');

       

    });

    it("TC4 – Alterar um item SEM sucesso #2", () => {   
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
 
        cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL - alterada')
        .parents('.MuiDataGrid-row')
        .find('button:nth-child(2)')
        .click();


        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()
        cy.get('[id=description]').clear();
        cy.get('[id=name]').clear();  
        cy.get('[id=description]').clear().type('Camisola Verde XL - alterada v2');  
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();
        cy.get('#name')
        .next('span')
        .should('have.text', 'Preenchimento obrigatório');
 
        cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL - alterada v2').should('not.exist');
    });

     

     
})