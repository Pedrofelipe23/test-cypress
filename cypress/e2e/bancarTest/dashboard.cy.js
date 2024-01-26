import components from "../../support/elements/Components"

describe('BanCar - dashboard', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
        cy.login('matheus123@gmail.com','12345678Ti@')
    }) 

    it('Entering the dashboard page',() => {
        components.iframePageContent('.pb-10','Olá, matheus pj')
        components.iframePageContent('.pb-10','Seja bem-vindo ao seu Dashboard.')
        cy.wait(2000)
    })

    it('Filter data from the activity table in the search field',() => {
        components.iframePageContent('#table_filter','Atividades')
        components.clickOnFieldsInsideIframe('#periodFilter')
        components.clickOnFieldsInsideIframe('#60d')
        components.clickOnFieldsInsideIframe('#periodButtonApply')
        cy.wait(2000)
        components.interactInsideTheIframe('#table_filter > label > input[type=search]','IYG4P23')
        cy.wait(2000)
        //components.iframePageContent('#table > tbody > tr.odd > td > div > div:nth-child(1) > div.flex.flex-col > p','Vistoria de reboque Placa ABC1234')
    })

    it('Accessing the activities page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > a > p','Ver todas as atividades')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > a')
        cy.wait(2000)
    });

    it('Accessing The Statement Page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button > span','extrato')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button')
        cy.wait(2000)
    });

    it('Accessing the invoice page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button > span','Notas Fiscais')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button')
        cy.wait(2000)
    });

    it('Accessing the Taxas page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button > span','Taxas')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button')
        cy.wait(2000)
    });

    it('Accessing the FAQ page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button > span','FAQ')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button')
        cy.wait(2000)
    });

    it('Accessing the page to make PIX transfers', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div.bg-surface.mb-6.rounded-lg.p-4.shadow-sm > div:nth-child(4) > a','Transferir')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div.bg-surface.mb-6.rounded-lg.p-4.shadow-sm > div:nth-child(4) > a')
        cy.wait(2000)
    });

    

})    