describe('BanCar - login', () => {

    beforeEach(() => {
        cy.visit('https://bancar.inf.br/pay/')
      }) 

    
    it.only('validando credenciais',() => {
        cy.login('Pedro.pereirawj@gmail.com', '123')
    })  
    
    it('efetuando login com dados do usuario em analise',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('pedro.pereirawj@gmail.com', 'Wino@2330')

        cy.visit('https://bancar.inf.br/pay/pages/pendente')
        cy.get('div.flex > .text-palatinate-400')
            .should('contain','Ops! Seus documentos ainda estão em análise. Por favor, aguarde alguns minutos ou clique em atualizar.')
    })

    it('efetuando login com dados do usuario aprovado',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('Pedro.pereirawj@gmail.com', 'Wino@2330')

        cy.visit('https://bancar.inf.br/pay/')
        cy.get('#content_iframe') // lidando com iframe na pagina
            .then(($iframe) => {
                const iframeContent = $iframe.contents().find('.pb-10')

                cy.wrap(iframeContent)
                    .should('contain','Olá, WINO INTERATIVA LTDA')

                cy.wrap(iframeContent)
                    .should('contain','Seja bem-vindo ao seu Dashboard.')    
        })
    })

})    