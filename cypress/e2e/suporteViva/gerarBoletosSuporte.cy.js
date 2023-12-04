describe('gerarBoletosSuporte', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/suporte/gerarBoletosSuporte')
        cy.get('label').should('contain', 'Nome de usuário (login)')
        cy.login('pedro', '1234')
      }) 
    
    it('tentativa de request sem passar placa no input de pesquisa',() => {
        cy.get('#pesquisaPlaca').click()
        cy.get('.swal2-modal').should('contain','Por favor, insira uma placa para prosseguir!')
    })
    
    it('tentativa de request com dados invalidos',() => {
        cy.get('#placa').type('AAAAA')
        cy.get('#pesquisaPlaca').click()
        cy.get('.swal2-modal').should('contain','Nenhuma vistoria encontrada. Tente outra placa!')
    })

    it('tentativa criar linha de boleto sem dados',() => {
        cy.get('#gerarBoleto').click()
        cy.get('.swal2-modal').should('contain','Por favor, insira a data de vencimento do boleto.')
        cy.get('.swal2-confirm').click()
    })

    it('tentativa de criar nova linha de boleto com anterior ja pago', () => {
        cy.get('.tw-grid > :nth-child(1)').should('contain','Consultar por Placa')
        cy.get('#placa').type('ABC1299')
        cy.get('#pesquisaPlaca').click()

        cy.get('.swal2-modal').should('contain','A placa pesquisada já possui um boleto')
        cy.get('.swal2-modal').should('contain','associado e consta como PAGO.')
        cy.get('.swal2-modal').should('contain','Por favor, busque por outra placa.')

        cy.get('.swal2-confirm').click()
        cy.get('.titulopaginas').should('contain','Novo Boleto')
    })

    it.only('Validação informativa para usuario criar nova linha de boleto desvinculando a anterior', () => {
        cy.get('.tw-grid > :nth-child(1)').should('contain','Consultar por Placa')
        cy.get('#placa').type('APX6G05')
        cy.get('#pesquisaPlaca').click()

        cy.get('.swal2-modal')
            .should('contain','A placa pesquisada já possui um boleto associado e não pago, deseja desvinculá-lo e continuar?')
        cy.get('.swal2-cancel').click()
    })

    //it('criando nova linha de boleto com pagamento cartão web', () => {
        //cy.get('.tw-grid > :nth-child(1)').should('contain','Consultar por Placa')
        //cy.get('#placa').type('APX6G05')
        //cy.get('#pesquisaPlaca').click()

        //cy.get('.swal2-modal')
            //.should('contain','A placa pesquisada já possui um boleto associado e não pago, deseja desvinculá-lo e continuar?')
        //cy.get('.swal2-confirm').click()

        //cy.get('.swal2-modal').should('contain','Boleto desvinculado com sucesso.')
        //cy.get('.swal2-confirm').click()

        //cy.get('#select-wrapper-743041 > .relative > .peer').select('Não pago')
        //cy.get('#select-wrapper-743041 > .relative > .peer').should('contain','Não pago')

        //cy.get('#select-wrapper-494002 > .relative > .peer').select('Cartão web')
        //cy.get('#select-wrapper-494002 > .relative > .peer').should('contain','Cartão web')

        //cy.get('#gerarBoleto').click()
        //cy.get('.swal2-modal').should('contain','Boleto criado com sucesso!')
        //cy.get('.swal2-confirm').click()
    //})
    

})