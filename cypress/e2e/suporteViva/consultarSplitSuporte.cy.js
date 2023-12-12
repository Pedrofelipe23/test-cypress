describe('consultarSplitSuporte', () => {

    beforeEach(() => {
        cy.visit('https://suporte.vivabr.com.br/viva/suporte/consultarSplitSuporte')
        cy.get('label').should('contain', 'Nome de usuário (login)')
        cy.login('pedro', '1234')
      }) 

    it('tentativa de consultar Split sem selecionar tipo de busca',() => {
        cy.get('#search').click()
        cy.get('#swal2-content').should('contain','Campo Placa/numeroLaudo/nossoNumero é obrigatório.')
    })

    it('tentativa de consultar Split sem digitar Placa/NumeroLaudo',() => {
        cy.get('#type')
            .then(($select) => {
            cy.wrap($select).select('Placa/NumeroLaudo', { force: true });
        });

        cy.get('#search').click()
        cy.get('#swal2-content').should('contain','Campo Placa/numeroLaudo/nossoNumero é obrigatório.')
    })
    
    it('efetuar consulta de Split com dados invalidos',() => {
        cy.get('#searchField').type('x')
        cy.get('#type')
            .then(($select) => {
            cy.wrap($select).select('Placa/NumeroLaudo', { force: true });
        });

        cy.get('#search').click()
        cy.get('#table .dataTables_empty').should('contain','Não foram encontrados resultados')
    })
    
    it('efetuar transferencia de pegamento correta',() => {
        cy.get('#searchField').type('6246')
        cy.get('#type')
            .then(($select) => {
            cy.wrap($select).select('Placa/NumeroLaudo', { force: true });
        });

        cy.get('#search').click()

        cy.get('.odd > :nth-child(1)').should('contain','ESOXXY')
        cy.get('.odd > :nth-child(2)').should('contain','ECV')
        cy.get('.odd > :nth-child(3)').should('contain','65,94')
        cy.get('.odd > :nth-child(5)').should('contain','saomateus@alfavistoriaes.com.br')
        cy.get('.odd > :nth-child(6)').should('contain','66254015228')
    })


})