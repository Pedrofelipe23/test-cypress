describe('BanCar - login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/login/auth')
      }) 

      it('Tentativa de efetuar login com e-mail incorreto',() => {
        cy.get('#j_username').type('Pedrooo.pereirawj@gmail.com')
        cy.get('#j_password').type('Wino@2330')
        cy.get('#entrar').click()

        cy.get('#swal2-content').should('contain','Usuário não encontrado!')
        cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    })  

    it('Tentativa de efetuar login com a senha incorreta',() => {
        cy.get('#j_username').type('Pedro.pereirawj@gmail.com')
        cy.get('#j_password').type('123')
        cy.get('#entrar').click()

        cy.get('#swal2-content').should('contain','Senha incorreta!')
        cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    })  

    it('Tentativa de efetuar login sem username e senha',() => {
        cy.get('#entrar').click()

        cy.get('#swal2-content').should('contain','Usuário não encontrado!')
        cy.get('#swal2-content').should('contain','Verifique suas credenciais e tente novamente!')
    })  
    
    it('Efetuando login com dados do usuario em analise',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('pedro.pereirawj@gmail.com', 'Wino@2330')

        cy.visit('http://localhost:8080/eva/pages/pendente')
        cy.get('div.flex > .text-palatinate-400')
            .should('contain','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    })

    it('Efetuando login com dados do usuario aprovado',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('Pedro.pereirawj@gmail.com', 'Wino@2330')

        cy.visit('http://localhost:8080/eva/')
        cy.get('#content_iframe') // lidando com iframe na pagina
            .then(($iframe) => {
                const iframeContent = $iframe.contents().find('.pb-10')

                cy.wrap(iframeContent)
                    .should('contain','Olá, WINO INTERATIVA LTDA')

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
        cy.get('#modalBody > .text-secondary')
            .should('contain','Insira o seu e-mail de login e enviaremos um link para você voltar a acessar a sua conta.')     
    })

})    