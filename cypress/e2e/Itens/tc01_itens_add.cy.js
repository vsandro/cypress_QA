const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Itens", () => {

    it("TC1 - Adicinar um item COM sucesso #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
        cy.get('[id=btn_adiciona_item]').click();

        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Calçados").click()

        cy.get('[id=name]').type('Sapatos castanhos');
        cy.get('[id=description]').type('Sapatos castanhos, 39');
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();

       
        cy.contains('.MuiDataGrid-cellContent', 'Sapatos castanhos, 39')
        

    });

    it("TC1 - Adicinar um item COM sucesso #2", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
        cy.get('[id=btn_adiciona_item]').click();

        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()

        cy.get('[id=name]').type('Camisola Verde');
        cy.get('[id=description]').type('Camisola Verde XL');
        cy.get('[id=active]').check();

        cy.get('[id=btnGravar]').click();

        
        cy.contains('.MuiDataGrid-cellContent', 'Camisola Verde XL')

    });

    it("TC2 - Adicinar um item SEM sucesso #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
        cy.get('[id=btn_adiciona_item]').click();

        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Calçados").click()

        cy.get('[id=name]').type('Sapato'); 
        cy.get('[id=active]').uncheck(); 
        cy.get('[id=btnGravar]').click();

        cy.get('#description')
        .next('span')
        .should('have.text', 'Preenchimento obrigatório');

        cy.get('.MuiDataGrid-main')
        .find('[data-field="description"]')
        .last()
        .find('.MuiDataGrid-cellContent')
        .should('not.have.text', '');
        

    });

    it("TC2 - Adicinar um item SEM sucesso #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuItems]', {timeout: 12000}).should("be.visible")
        cy.get('[id=mnuItems]').click();
        cy.get('[id=btn_adiciona_item]').click();

        cy.get('[id=select_listagem_categorias]').click();      
        cy.xpath('//html/body/div/div[3]/ul').contains("Roupas").click()

        cy.get('[id=description]').type('Camisola Verde'); 
        cy.get('[id=active]').check(); 
        cy.get('[id=btnGravar]').click();

        cy.get('#name')
        .next('span')
        .should('have.text', 'Preenchimento obrigatório');

        

    });

      
})