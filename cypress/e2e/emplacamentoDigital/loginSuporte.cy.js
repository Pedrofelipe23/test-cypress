import components from "../../support/elements/Components"

describe('Suporte emplacamentoDigital - login:', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/login')
    }) 

    it('Entrando pagina de login', () => {
        components.verifyTextExists(':nth-child(1) > .font-medium','Username')
        
    });

    it('Tentativa de Entrar sem usermane e password', () => {
        components.clickButton('.inline-flex')
        components.verifyTextExists('.flex-col > :nth-child(1)','O usuário deve ter no mínimo 2 caracteres')
        components.verifyTextExists('.flex-col > :nth-child(2)','A senha deve ter no mínimo 3 caracteres')
    });

    it('Validação do campo Username', () => {
        components.inputText('.flex-col > :nth-child(1)','a')
        components.inputText('.flex-col > :nth-child(2)','123')
        components.clickButton('.inline-flex')
        components.verifyTextExists('.flex-col > :nth-child(1)','O usuário deve ter no mínimo 2 caracteres')
    });

    it('Validação do campo Password', () => {
        components.inputText('.flex-col > :nth-child(1)','wj')
        components.inputText('.flex-col > :nth-child(2)','12')
        components.clickButton('.inline-flex')
        components.verifyTextExists('.flex-col > :nth-child(2)','A senha deve ter no mínimo 3 caracteres')
    });

    it('Validação de usuario invalido', () => {
        components.inputText('.flex-col > :nth-child(1)','wj')
        components.inputText('.flex-col > :nth-child(2)','adminwj001')
        components.clickButton('.inline-flex')
        components.verifyTextExists('.group','Usuário não encontrado')
    });

})    