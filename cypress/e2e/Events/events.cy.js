const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />



describe("Events", () => {

    beforeEach(() => {
        login('beto@gmail.com', '123456');
    })

    it("TC1 - Adicionar Tipos de eventos #1", () => {       
        cy.get('[id=mnuEvent]', {timeout: 30000}).should("be.visible").click()    
        cy.xpath('//html/body/main/div/div[2]/section/div/div/div[1]/button').click()
        cy.get('[id=name]').type('Teste 1');
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[3]/button[2]').click()        
    });

    it("TC2 - Alterar tipos de eventos #2", () => { 
        cy.get('[id=mnuEvent]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Teste 1').find('button').eq(11).click() 
        cy.get('[id=name]').clear()
        cy.get('[id=name]').type('Teste 1-1');
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[3]/button[2]').click()        
    });   

    it("TC3 - Alterar tipos de eventos e cancelar #3", () => {               
        cy.get('[id=mnuEvent]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Teste 1-1').find('button').eq(11).click() 
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[3]/button[1]').click()        
    });
    
    it("TC4 - Apagar tipos de eventos - click Sim #4", () => {        
        cy.get('[id=mnuEvent]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Teste 1-1').find('button').eq(10).click()
        cy.xpath('//html/body/div/div/div[6]/button[1]').click()
        // cy.get("#iframe").iframe().find("Sim").click(); 
        ///html/body/div/div/div[6]/button[1]       
    });

    it("TC5 - Apagar tipos de eventos - click Cancelar #5", () => {            
        cy.get('[id=mnuEvent]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Contentor cheio').find('button').eq(2).click()
        cy.xpath('//html/body/div/div/div[6]/button[3]').click()    
    });
})