import components from "../../support/elements/Components"

describe('bancar - transacoesSuporte',() => {

    beforeEach(() =>{
        cy.visit('/suportePages/transacoesSuporte')
        cy.login('daniel@wj.com', 'Bancar@2901')
    })

    it('Buscar transação sem passar paramentro', () => {
        components.clickButton('.text-button-primary')
        components.verifySwalMessage('Erro interno ao buscar dados.  Verifique o dado inserido e tente novamente.')
    });

    it('test - suporte', () => {
        components.inputText('#search','370875626')
        components.clickButton('.text-button-primary')
        components.verifyTextExists('.text-heading-4','')
    });

    

})