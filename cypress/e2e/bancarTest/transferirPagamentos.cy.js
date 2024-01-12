describe('BanCar - transferirPagamentos', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/pages/transferirPagamentos')
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
      }) 

    it('Entrando na page extrato',() => {
        cy.get('.text-heading-5').should('contain', 'Histórico de Transferência')
        cy.get('#novaTransferencia').should('contain', 'Nova Transferência')
    })

    

})    