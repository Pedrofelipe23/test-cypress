describe('BanCar - login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/login/auth')
      }) 

    it('Tentativa de efetuar login com e-mail incorreto',() => {
        cy.get('#j_username').type('Pedrooo.pereirawj@gmail.com')
        cy.get('#j_password').type('Wino@2330')
        cy.get('#entrar').click()

        cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    })  

    // it('Tentativa de efetuar login com a senha incorreta',() => {
    //     cy.get('#j_username').type('matheusmws31@gmail.com')
    //     cy.get('#entrar').click()

    //     cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    // })  

    it('Tentativa de efetuar login sem username e senha',() => {
        cy.get('#entrar').click()
        cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    })  
    
    it('Efetuando login com dados do usuario em analise',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')

        cy.visit('http://localhost:8080/eva/pages/pendente')
        cy.get('div.flex > .text-palatinate-400')
            .should('contain','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    })

    it('Efetuando login com dados do usuario aprovado',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')

        cy.visit('http://localhost:8080/eva/')
        cy.get('#content_iframe') // lidando com iframe na pagina
            .then(($iframe) => {
                const iframeContent = $iframe.contents().find('.pb-10')

                cy.wrap(iframeContent)
                    .should('contain','Seja bem-vindo ao seu Dashboard.')    
        })
    })

    it('Entrando na pagina cadastramento de conta',()=>{
        cy.get('a.text-secondary').should('contain','Faça seu cadastro aqui')
        cy.get('a.text-secondary').click()

        cy.contains('Cadastrar conta').should('contain','Cadastrar conta')
        cy.get('.text-secondary').should('contain','Preencha os campos abaixo com os dados da sua conta')
    })

    it('Verificando modal esqueci a senha',()=>{
        cy.get('#novasenha').should('contain','Esqueci a senha')
        cy.get('#novasenha').click()

        cy.get('#recoverPasswordModalTitle').should('contain','Problemas para entrar?')
    })

    it(' Tentativa de envio de e-mail para alteração de senha sem passar e-mail',()=>{
        cy.get('#novasenha').should('contain','Esqueci a senha')
        cy.get('#novasenha').click()
        cy.get('.ml-1').click()

        cy.get('#swal2-content').should('contain','E-mail inválido.')
    })

    it('Validando campos e-mail para alteração de senha',()=>{
        cy.get('#novasenha').should('contain','Esqueci a senha')
        cy.get('#novasenha').click()
        cy.get('#mail').type('pedro@wj.com.br')
        cy.get('#confirmedMail').type('christhian.solution@gmail.com')
        cy.get('.ml-1').click()

        cy.get('#swal2-content').should('contain','Os e-mails não coincidem.  Por favor, verifique os campos e tente novamente.')
    })

    it('Enviando e-mail para alteração de senha',()=>{
        cy.get('#novasenha').should('contain','Esqueci a senha')
        cy.get('#novasenha').click()
        cy.get('#mail').type('christhian.solution@gmail.com')
        cy.get('#confirmedMail').type('christhian.solution@gmail.com')
        cy.get('.ml-1').click()

        cy.wait(3000)
        cy.get('.flex-col > .text-heading-5').should('contain','Enviamos um link para seu e-mail cadastrado.')
        cy.get('.text-capitalize').should('contain','Cheque sua caixa de entrada ou spam! :)')
    })

    it('Link com a page para alteração de senha',()=>{
        cy.visit('http://localhost:8080/eva/externalPages/redefinirSenha?id=7de00843-bb9c-491b-bbbb-d47a57f39ea7')

        cy.get('.font-semibold').should('contain','Redefinir Senha')
        cy.get('.text-subtitle').should('contain','Redefinir Senha')
    })

})    