import components from "../../support/elements/Components"

describe('BanCar - dashboard', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
        cy.login('matheusmws31@gmail.com','12345678Ti@')
    }) 

    it('Entering the dashboard page',() => {
        components.iframePageContent('.pb-10','Olá, MATHEUS')
        components.iframePageContent('.pb-10','Seja bem-vindo ao seu Dashboard.')
    })

    it('Filter data from the activity table in the search field',() => {
        components.iframePageContent('#table_filter','Atividades')
        components.clickOnFieldsInsideIframe('#periodFilter')
        components.clickOnFieldsInsideIframe('#30d')
        components.clickOnFieldsInsideIframe('#periodButtonApply')
        cy.wait(3000)
        components.interactInsideTheIframe('#table_filter > label > input[type=search]','Vistoria de reboque')
        //cy.wait(2000)
        //components.iframePageContent('#table > tbody > tr.odd > td > div > div:nth-child(1) > div.flex.flex-col > p','Vistoria de reboque Placa ABC1234')
    })

    it('Accessing The Statement Page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button > span','extrato')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button')
    });

    it('Accessing the activities page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button > span','atividades')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button')
    });

    it('Accessing the transfer page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button > span','transferências')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button')
    });

    it('Accessing the Taxas page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button > span','Taxas')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button')
    });

    it('Accessing the FAQ page', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(7) > a > button > span','FAQ')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(7) > a > button')
    });

    it('Accessing the page to make PIX transfers', () => {
        components.iframePageContent('#dashboard > div > section > div > div > div.bg-surface.mb-6.rounded-lg.p-4.shadow-sm > div:nth-child(4) > a','Transferir')
        components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div.bg-surface.mb-6.rounded-lg.p-4.shadow-sm > div:nth-child(4) > a')
    });

    

})    