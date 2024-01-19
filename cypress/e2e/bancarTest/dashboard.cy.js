import Components from "../../support/elements/Components"
import login from "../../support/pageObjects/login.page"

describe('BanCar - dashboard', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
        cy.login('matheus123@gmail.com','12345678Ti@')
    }) 

    it('Entering the dashboard page',() => {
        Components.iframePageContent('.pb-10','Olá, MATHEUS PJ')
        Components.iframePageContent('.pb-10','Seja bem-vindo ao seu Dashboard.')
    })

    it('Filter data from the activity table in the search field',() => {
        Components.iframePageContent('#table_filter','Atividades')
        cy.wait(2000)
        Components.interactInsideTheIframe('#table_filter > label > input[type=search]','Vistoria de reboque')
        cy.wait(2000)
        Components.iframePageContent('#table > tbody > tr.odd > td > div > div:nth-child(1) > div.flex.flex-col > p','Vistoria de reboque Placa ABC1234')
    })

    it('Accessing The Statement Page', () => {
        Components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button > span','seu extrato')
        Components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(3) > a > button')
    });

    it('Accessing the activities page', () => {
        Components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button > span','atividades')
        Components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(4) > a > button')
    });

    it('Accessing the transfer page', () => {
        Components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button > span','transferências')
        Components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(5) > a > button')
    });

    it('Accessing the FAQ page', () => {
        Components.iframePageContent('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button > span','FAQ')
        Components.clickOnFieldsInsideIframe('#dashboard > div > section > div > div > div > div:nth-child(6) > a > button')
    });


    

})    