describe('SolutionPay - login', () => {

    beforeEach(() => {
        cy.visit('https://bancar.inf.br/pay/')
      }) 

    
    it('efetuando login com dados do usuario em analise',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('pedro.pereirawj@gmail.com', 'Wino@2330')

        cy.visit('https://bancar.inf.br/pay/pendente')
        cy.get('.flex > .text-palatinate-400').should('contain','Ops, seus documentos ainda estão em análise.')
        cy.get('.flex > .text-palatinate-400').should('contain','Por favor, retorne em breve!')
    })

    it('efetuando login com dados do usuario aprovado',() => {
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('fabeiras@outlook.com', '@dm1nTI127@!')

        cy.visit('https://desenv.vivabr.com.br/pay/')
        cy.get('#content_iframe') // lidando com iframe na pagina
            .then(($iframe) => {
                const iframeContent = $iframe.contents().find('.pb-10')

                cy.wrap(iframeContent)
                    .should('contain','Olá, Fábio Moreira')

                cy.wrap(iframeContent)
                    .should('contain','Seja bem-vindo ao seu Dashboard.')    
        })
    })

})    