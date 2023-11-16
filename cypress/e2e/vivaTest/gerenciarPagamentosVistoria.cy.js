
describe('gerenciarPagamentosVistoria', () => {
  
  beforeEach(() => {
    cy.visit('https://homolog.vivabr.com.br/ibrascan/vistoria/gerenciarPagamentosVistoria')
    cy.get('label').should('contain', 'Usuário'); // assert
    cy.login('ibrascan.es', '1234');
  }) 

  it('consultando placa no input de pesquisa', () => {
    
    cy.get('#table_filter > label > .form-control').type('PQW9E08')
    cy.get('#table_filter > label > .form-control').should('have.value', 'PQW9E08'); // assert
  })

  it('Criar vistoria exeção POC', () => {
    cy.get('.titulopaginas').should('contain', 'Gerenciar pagamentos'); // assert
    cy.get(':nth-child(2) > :nth-child(8) > .dropdown > .rounded-button').click();
  })

})