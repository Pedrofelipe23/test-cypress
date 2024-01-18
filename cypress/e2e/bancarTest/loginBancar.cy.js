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

    // it('Tentativa de efetuar login com a senha incorreta',() => {
    //     cy.get('#j_username').type('matheusmws31@gmail.com')
    //     cy.get('#entrar').click()

    //     cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    // })  

    it('Attempt to log in without username and password',() => {
        login.clickLoginButton()
        Components.verifySwalMessage('Verifique suas credenciais e tente novamente!')
    })  
    
    // it('Efetuando login com dados do usuario em analise',() => {
    //     login.verifyTextExists('.mb-4 > .text-secondary','Preencha os campos abaixo com seus dados')
    //     login.fillUsername('matheusmws31@gmail.com')
    //     login.fillPassword('12345678Ti@')
    //     login.clickLoginButton()
    //     cy.wait(3000)
    //     cy.visit('/pages/pendente')
    //     login.verifyTextExists('div.flex > .text-palatinate-400','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    // })

    // it.only('Efetuando login com dados do usuario aprovado',() => {
    //     login.verifyTextExists('.mb-4 > .text-secondary','Preencha os campos abaixo com seus dados')
    //     login.fillUsername('matheusmws31@gmail.com')
    //     login.fillPassword('12345678Ti@')
    //     login.clickLoginButton()
    //     login.iframePage('.pb-10','Seja bem-vindo ao seu Dashboard.')
    // })

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
        Components.clickButton('.ml-1')
        Components.verifySwalMessage('E-mail inválido.')
    })

    it('Validating email fields to change password',()=>{
        Components.verifyTextExists('#novasenha','Esqueci a senha')
        Components.clickButton('#novasenha')
        cy.wait(3000)
        Components.inputText('#mail','pedro@wj.com.br')
        Components.inputText('#confirmedMail','christhian.solution@gmail.com')
        Components.clickButton('.ml-1')
        Components.verifySwalMessage('Os e-mails não coincidem.  Por favor, verifique os campos e tente novamente.')
    })

    it('Sending email to change password',()=>{
        Components.verifyTextExists('#novasenha','Esqueci a senha')
        Components.clickButton('#novasenha')
        Components.inputText('#mail','pedro.pereirawj@gmail.com')
        Components.inputText('#confirmedMail','pedro.pereirawj@gmail.com')
        Components.clickButton('.ml-1')
        cy.wait(3000)
        Components.verifyTextExists('.flex-col > .text-heading-5','Enviamos um link para seu e-mail cadastrado.')
        Components.verifyTextExists('.text-capitalize','Cheque sua caixa de entrada ou spam! :)')
    })

    it('Link to password change page expired',()=>{
        cy.visit('/externalPages/redefinirSenha?id=7de00843-bb9c-491b-bbbb-d47a57f39ea7')
        Components.verifyTextExists('.font-semibold','Redefinir Senha')
        Components.verifyTextExists('.font-semibold','Redefinir Senha')
    })

})    