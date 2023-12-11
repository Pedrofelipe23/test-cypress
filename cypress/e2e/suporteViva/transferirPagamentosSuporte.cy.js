describe('transferirPagamentosSuporte', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/suporte/transferirPagamentosSuporte')
        cy.get('label').should('contain', 'Nome de usuário (login)')
        cy.login('pedro', '1234')
      }) 

    it('tentativa de consultar pagamento sem selecionar banco',() => {
        cy.get('#search').click()
        cy.get('#swal2-content').should('contain','Por favor, selecione o estado.')
    })

    it('tentativa de consultar pagamento sem digitar numeroLaudo',() => {
        cy.get('#estado')
            .then(($select) => {
            cy.wrap($select).select('VIVAMT', { force: true });
        });

        cy.get('#search').click()
        cy.get('#swal2-content').should('contain','Por favor, digite o número do laudo de origem.')
    })
    
    it('efetuar transferencia de pegamento sem selecionar o status do atendimento de origem',() => {

        cy.get('#estado')
            .then(($select) => {
            cy.wrap($select).select('VIVAMT', { force: true });
        });

        cy.get('#numeroLaudo').type('644226')
        cy.get('#search').click()
        cy.get('#placa').should('contain','HTV4E00')
        cy.get('#laudo').should('contain','644226')
        cy.get('#ecv').should('contain','VISTORIA VEICULAR VILA VELHA LTDA')
        cy.get('#pagamento').should('contain','cartao web')
        cy.get('#valor').should('contain','124.59')        

        cy.get('#numeroLaudo2').type('644226')
        cy.get('#searchDestino').click()
        cy.get('#placa').should('contain','HTV4E00')
        cy.get('#laudo').should('contain','644226')
        cy.get('#ecv').should('contain','VISTORIA VEICULAR VILA VELHA LTDA')
        cy.get('#pagamento').should('contain','cartao web')
        cy.get('#valor').should('contain','124.59')     
        
        cy.get('#statusAtendimento')
            .then(($select) => {
            cy.wrap($select).select(0 , { force: true });
        });
        cy.get('.tw-justify-end > .rounded-button').click()
        cy.get('#swal2-content').should('contain','Por favor, selecione o status para atribuir ao atendimento de origem.')
    })
    
    it('efetuar transferencia de pegamento correta',() => {

        cy.get('#estado')
            .then(($select) => {
            cy.wrap($select).select('VIVAMT', { force: true });
        });

        cy.get('#numeroLaudo').type('10075')
        cy.get('#search').click()
        cy.get('#placa').should('contain','ESA1935')
        cy.get('#laudo').should('contain','10075')
        cy.get('#ecv').should('contain','VISTORIA VEICULAR VILA VELHA LTDA')
        cy.get('#pagamento').should('contain','pix')
        cy.get('#valor').should('contain','171.84')        

        cy.get('#numeroLaudo2').type('644226')
        cy.get('#searchDestino').click()
        cy.get('#placa').should('contain','HTV4E00')
        cy.get('#laudo').should('contain','644226')
        cy.get('#ecv').should('contain','VISTORIA VEICULAR VILA VELHA LTDA')
        cy.get('#pagamento').should('contain','cartao web')
        cy.get('#valor').should('contain','124.59')     
        
        cy.get('#statusAtendimento')
            .then(($select) => {
            cy.wrap($select).select('Em andamento', { force: true });
        });
        cy.get('.tw-justify-end > .rounded-button').click()
        //cy.get('#swal2-content').should('contain','Por favor, selecione o status para atribuir ao atendimento de origem.')
    })





})