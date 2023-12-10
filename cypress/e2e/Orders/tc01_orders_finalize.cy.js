const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />

describe("Orders", () => {

    it("TC3 - Ver informação de um pedido #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuOrders]', { timeout: 12000 }).should("be.visible");
        cy.get('[id=mnuOrders]').click();

        cy.get('.MuiDataGrid-virtualScrollerContent button')
        .first()
        .click();
        cy.get('#btn_Cancelar').click();
        
        

    });

    it("TC2 - Fechar um pedido sem sucesso #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuOrders]', { timeout: 12000 }).should("be.visible");
        cy.get('[id=mnuOrders]').click();

        let orangeItem;  

        cy.get('.MuiDataGrid-virtualScrollerContent .MuiDataGrid-row').each(($row) => {
           
            const isOrange = $row.find('.text-orange-400').length > 0;

             
            if (isOrange) {
                $row.find('button').click();
                cy.get('[id=finished]').uncheck();
                cy.get('[id=btn_Guardar]').click();

                orangeItem = $row; // Armazenar a referência ao item clicado

                 
                cy.get(orangeItem).find('.text-orange-400').should('exist');

                return false; 
            }
        });

        // Se orangeItem não for undefined, isso significa que um item laranja foi encontrado e processado
        if (orangeItem) {
            cy.log('O item laranja foi encontrado e verificado.');
        } else {
            cy.log('Nenhum item laranja encontrado.');
        }
        
        

    });

    it("TC1 - Fechar um pedido com sucesso #1", () => {       
        login('beto@gmail.com', '123456');

        cy.get('[id=mnuOrders]', { timeout: 12000 }).should("be.visible");
        cy.get('[id=mnuOrders]').click();

        let orangeItem;  

        cy.get('.MuiDataGrid-virtualScrollerContent .MuiDataGrid-row').each(($row) => {
           
            const isOrange = $row.find('.text-orange-400').length > 0;

             
            if (isOrange) {
                $row.find('button').click();
                cy.get('[id=finished]').check();
                cy.get('[id=btn_Guardar]').click();

                orangeItem = $row; // Armazenar a referência ao item clicado

                 
                cy.get(orangeItem).find('.text-orange-400').should('not.exist');

                return false; 
            }
        });

        // Se orangeItem não for undefined, isso significa que um item laranja foi encontrado e processado
        if (orangeItem) {
            cy.log('O item laranja foi encontrado e verificado.');
        } else {
            cy.log('Nenhum item laranja encontrado.');
        }
        
        

    });

   

        
})