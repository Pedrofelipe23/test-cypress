describe('BanCar - dashboard', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/login/auth')
      }) 

    it('Entrando na page dashboard',() => {
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

    

})    