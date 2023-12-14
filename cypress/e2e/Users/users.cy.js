const login = require("../utils/login"); 
require('cypress-xpath')

/// <reference types="cypress" />



describe("Users", () => {

    beforeEach(() => {
        login('beto@gmail.com', '123456');
    })

    it("TC1 - Adicionar Utilizador #1", () => {       
        cy.get('[id=mnuUser]', {timeout: 30000}).should("be.visible").click()    
        cy.xpath('//html/body/main/div/div[2]/section/div/div/div[1]/button').click()        
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[1]/div').click()
        cy.xpath('//html/body/div/div[3]/ul').contains('Gestor local').click()        
        cy.get('[id=name]').type('Azeitona');
        cy.get('[id=email]').type('azeitona@ineed.com');
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[4]/div').click()
        cy.xpath('//html/body/div/div[3]/ul').contains('Braga I').click()        
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[5]/button[2]').click()        
    });

    it("TC2 - Alterar utilizador #2", () => { 
        cy.get('[id=mnuUser]', {timeout: 30000}).should("be.visible").click()
        cy.wait(5000)
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Azeitona').find('button').eq(3).click() 
        cy.get('[id=name]').clear()
        cy.get('[id=name]').type('Azeitona 1');
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[5]/button[2]').click()        
    });   

    it("TC3 - Alterar utilizadores e cancelar #3", () => {               
        cy.get('[id=mnuUser]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Azeitona 1').find('button').eq(3).click() 
        cy.xpath('//html/body/main/div/div[2]/section/div/div[2]/div/div/form/div[5]/button[1]').click()        
    });
    
    it("TC4 - Apagar utilizadores - click Sim #4", () => {        
        cy.get('[id=mnuUser]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Azeitona 1').find('button').eq(2).click()
        cy.xpath('//html/body/div/div/div[6]/button[1]').click()     
    });

    it("TC5 - Apagar tipos de eventos - click Cancelar #5", () => {            
        cy.get('[id=mnuUser]', {timeout: 30000}).should("be.visible").click()
        cy.get('.MuiDataGrid-virtualScrollerContent').should('contain', 'Bruna').find('button').eq(4).click()
        cy.xpath('//html/body/div/div/div[6]/button[3]').click()    
    });
})