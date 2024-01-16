import login from "../../support/pageObjects/login.page"

describe('BanCar - login', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
      }) 

    it('Tentativa de efetuar login com e-mail incorreto',() => {
        login.fillUsername('Pedrooo.pereirawj@gmail.com')
        login.fillPassword('Wino@2330')
        login.clickLoginButton()
        login.verifySwalMessage('Verifique suas credenciais e tente novamente!')
    }) 

    // it('Tentativa de efetuar login com a senha incorreta',() => {
    //     cy.get('#j_username').type('matheusmws31@gmail.com')
    //     cy.get('#entrar').click()

    //     cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    // })  

    it('Tentativa de efetuar login sem username e senha',() => {
        login.clickLoginButton()
        login.verifySwalMessage('Verifique suas credenciais e tente novamente!')
    })  
    
    it('Efetuando login com dados do usuario em analise',() => {
        login.verifyTextExists('.mb-4 > .text-secondary','Preencha os campos abaixo com seus dados')
        login.fillUsername('matheusmws31@gmail.com')
        login.fillPassword('12345678Ti@')
        login.clickLoginButton()
        cy.visit('/pages/pendente')
        login.verifyTextExists('div.flex > .text-palatinate-400','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    })

    // it.only('Efetuando login com dados do usuario aprovado',() => {
    //     login.verifyTextExists('.mb-4 > .text-secondary','Preencha os campos abaixo com seus dados')
    //     login.fillUsername('matheusmws31@gmail.com')
    //     login.fillPassword('12345678Ti@')
    //     login.clickLoginButton()
    //     login.iframePage('.pb-10','Seja bem-vindo ao seu Dashboard.')
    // })

    it('Entrando na pagina cadastramento de conta',()=>{
        login.verifyTextExists('a.text-secondary','Faça seu cadastro aqui')
        login.clickButton('a.text-secondary')
        login.verifyTextExists(':nth-child(1) > .font-semibold','Cadastrar conta')
        login.verifyTextExists('.text-secondary','Preencha os campos abaixo com seus dados para criar a sua conta')
    })

    it('Verificando modal esqueci a senha',()=>{
        login.verifyTextExists('#novasenha','Esqueci a senha')
        login.clickButton('#novasenha')
        login.verifyTextExists('#recoverPasswordModalTitle','Problemas para entrar?')
    })

    it(' Tentativa de envio de e-mail para alteração de senha sem passar e-mail',()=>{
        login.verifyTextExists('#novasenha','Esqueci a senha')
        login.clickButton('#novasenha')
        login.clickButton('.ml-1')
        login.verifySwalMessage('E-mail inválido.')
    })

    it('Validando campos e-mail para alteração de senha',()=>{
        login.verifyTextExists('#novasenha','Esqueci a senha')
        login.clickButton('#novasenha')
        login.clickButton('#novasenha')
        cy.wait(3000)
        login.inputText('#mail','pedro@wj.com.br')
        login.inputText('#confirmedMail','christhian.solution@gmail.com')
        login.clickButton('.ml-1')
        login.verifySwalMessage('Os e-mails não coincidem.  Por favor, verifique os campos e tente novamente.')
    })

    it('Enviando e-mail para alteração de senha',()=>{
        login.verifyTextExists('#novasenha','Esqueci a senha')
        login.clickButton('#novasenha')
        login.inputText('#mail','christhian.solution@gmail.com')
        login.inputText('#confirmedMail','christhian.solution@gmail.com')
        login.clickButton('.ml-1')
        cy.wait(3000)
        login.verifyTextExists('.flex-col > .text-heading-5','Enviamos um link para seu e-mail cadastrado.')
        login.verifyTextExists('.text-capitalize','Cheque sua caixa de entrada ou spam! :)')
    })

    it('Link com a page para alteração de senha',()=>{
        cy.visit('/externalPages/redefinirSenha?id=7de00843-bb9c-491b-bbbb-d47a57f39ea7')
        login.verifyTextExists('.font-semibold','Redefinir Senha')
        login.verifyTextExists('.font-semibold','Redefinir Senha')
    })

})    