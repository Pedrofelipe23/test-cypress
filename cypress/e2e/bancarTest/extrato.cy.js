describe('BanCar - extrato', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/pages/extrato')
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
      }) 

    it('Entrando na page extrato',() => {
        cy.get('.text-heading-5').should('contain', 'Extrato')
        cy.get('.dataTables_empty').should('contain', 'Não foram encontrados resultados')
    })

    it('Filtrando extrato por periodo',() => {
        cy.get('#periodFilter').click()
        cy.get(':nth-child(4) > .periodFilter').should('contain', 'Últimos 15 dias')
        cy.get(':nth-child(4) > .periodFilter').click()

        cy.get('#periodButtonApply').click()

        cy.get('.odd > [tabindex="0"] > .flex > :nth-child(2) > .text-phantom-800')
            .should('contain', 'Cobrança recebida - fatura nr. 348937897 Fábio Oliveira Moreira')
    })

    

})    