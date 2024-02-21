import components from "../../support/elements/Components"

describe('evaSuporte - consultaSplitTransf', () => {

  beforeEach(() =>{
    cy.visit('/suporte/consultaSplitTransf')
    cy.login('chris.ferreira', '654321')
  })

  it('Select validation: perform a search without selecting state, table and license plate', () => {
    components.clickButton('#searchButton')
    components.verifySwalMessage('Por favor, selecione um estado!')
  });

  it('Select validation: Perform a search without selecting table and plate', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.clickButton('#searchButton')
    components.verifySwalMessage('Por favor, selecione uma opção de pesquisa!')
  });

  it('Select Validation: Perform a search without selecting plate', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.selectFieldValue('#tableSelect','Split')
    components.clickButton('#searchButton')
    components.verifySwalMessage('Placa no formato inválido ou não informada')
  });

  it('Select validation: perform search with invalid license plate', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.selectFieldValue('#tableSelect','Split')
    components.clickButton('#searchButton')
    components.verifySwalMessage('Placa no formato inválido ou não informada')
  })

  it('Query Split successfully', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.selectFieldValue('#tableSelect','Split')
    components.inputText('#search','SGE5J00')
    components.clickButton('#searchButton')
    components.verifyTextExists(':nth-child(2) > .data-info-boleto','MARCELO FELIPE FIGUEIREDO RIBEIRO EIRELI - MATRIZ')    
  });

  it('consult plate transfer', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.selectFieldValue('#tableSelect','Transferências')
    components.inputText('#search','SGE5J00')
    components.clickButton('#searchButton')
    components.verifyTextExists('#transferencia > :nth-child(2) > :nth-child(7)','Valor referente à vendas apuradas no dia 09-02-2024. PROJETO ESPIRITO SANTO')    
  });

  it('consult transfer by email', () => {
    components.selectFieldValue('#ufSelect','ES')
    components.selectFieldValue('#tableSelect','Transferências')
    components.inputText('#search','squadra.placasmercosul@gmail.com')
    components.clickButton('#searchButton')
    cy.wait(1000)
    components.inputText('#searchItems','72793261354')
    components.clickButton('#searchButtonTransf')
    components.verifyTextExists('.contend-data-info > :nth-child(7)','Valor referente ao percentual direto das vendas apuradas no dia 16-02-2024.')    
  });


})