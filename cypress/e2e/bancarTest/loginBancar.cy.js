import login from "../../support/pageObjects/login.page"
import Components from "../../support/elements/Components"

describe('BanCar - login page', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
      }) 

    it('Attempting to log in with incorrect email',() => {
        login.fillUsername('Pedrooo.pereirawj@gmail.com')
        login.fillPassword('Wino@2330')
        login.clickLoginButton()
        Components.verifySwalMessage('Verifique suas credenciais e tente novamente!')
    }) 

    it('log in without verifying reCAPTCHA',() => {
        login.fillUsername('Pedro.pereirawj@gmail.com')
        login.clickLoginButton()
        Components.verifySwalMessage('Recaptcha inválido!')
    })

    it('Attempt to log in without username and password',() => {
        login.clickLoginButton()
        Components.verifySwalMessage('Verifique suas credenciais e tente novamente!')
    })  
    
    it('Logging in with user data under analysis',() => {
        cy.login('matheusmws31@gmail.com','12345678Ti@')
        cy.visit('/pages/pendente')
        Components.verifyTextExists('div.flex > .text-palatinate-400','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    })

    it('Logging in with approved user data',() => {
        cy.login('matheusmws31@gmail.com','12345678Ti@')
        Components.iframePageContent('.pb-10','Seja bem-vindo ao seu Dashboard.')
    })

    it('Entering the account registration page',()=>{
        Components.verifyTextExists('a.text-secondary','Faça seu cadastro aqui')
        Components.clickButton('a.text-secondary')
        Components.verifyTextExists(':nth-child(1) > .font-semibold','Cadastrar conta')
        Components.verifyTextExists('.text-secondary','Preencha os campos abaixo com seus dados para criar a sua conta')
    })

    it('Checking modal forgot password',()=>{
        Components.verifyTextExists('#novasenha','Esqueci a senha')
        Components.clickButton('#novasenha')
        Components.verifyTextExists('#recoverPasswordModalTitle','Problemas para entrar?')
    })

    it('Attempt to send email to change password without providing email',()=>{
        Components.verifyTextExists('#novasenha','Esqueci a senha')
        Components.clickButton('#novasenha')
        Components.clickButton('.ml-2')
        Components.verifySwalMessage('Por favor, preencha o campo "E-mail da conta" para prosseguir.')
    })

    it('Sending email to change password',()=>{
        Components.verifyTextExists('#novasenha','Esqueci a senha')
        Components.clickButton('#novasenha')
        Components.inputText('#mail','pedro.pereirawj@gmail.com')
        Components.clickButton('.ml-2')
        cy.wait(3000)
        Components.verifyTextExists('.flex-col > .text-heading-5','Enviamos um link para seu e-mail cadastrado.')
        Components.verifyTextExists('.text-capitalize','Cheque sua caixa de entrada ou spam! :)')
    })

    it('Link to password change page expired',()=>{
        cy.visit('/externalPages/redefinirSenha?id=7de00843-bb9c-491b-bbbb-d47a57f39ea7')
        Components.verifyTextExists('.text-heading-5','Link inválido ou expirado!')
    })

})    