import components from "../../support/elements/Components"

describe('bancar - uploadNotaFiscal', () => {

  beforeEach(() =>{
    cy.visit('/pages/uploadNotaFiscal')
        cy.login('pedro@wj.com.br', 'Pedro@123')
  })

  it('CNPJ validation test: check if CNPJ exists in our database', () => {
    components.inputText('#cnpj','01820394000197')
    components.inputText('#valor','1000000')
    components.inputText('#numeroRPS','474622')
    components.inputText('#dataEmissao','01042024')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Loja não encontrada para o CNPJ fornecido!')
  })

  it('CNPJ validation test: check if CNPJ exists', () => {
    components.inputText('#cnpj','12345678910112')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('CNPJ Inválido!  Por favor, preencha o campo corretamente!')
  })

  it('CNPJ validation test: try to send file without passing CNPJ', () => {
    components.inputText('#valor','1000000')
    components.inputText('#numeroRPS','474622')
    components.inputText('#dataEmissao','01042024')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, insira o número de CNPJ da loja.')
  });

  it('Value validation test: send file without passing the value', () => {
    components.inputText('#cnpj','01820394000197')
    components.inputText('#numeroRPS','474622')
    components.inputText('#dataEmissao','01042024')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, defina o valor da Nota Fiscal antes de prosseguir.')
  });

  it('Value validation test: minimum value input validation', () => {
    components.inputText('#valor','12')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('')
  });

  it('Value validation test: non-zero value.', () => {
    components.inputText('#valor',' ')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, insira um valor diferente de zero.')
  });

  it('RPS input validation test:', () => {
    components.inputText('#cnpj','01820394000197')
    components.inputText('#valor','1000000')
    components.inputText('#numeroRPS',' ')
    components.inputText('#dataEmissao','01042024')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, insira o número RPS da Nota Fiscal.')
  });

  it('Input data validation test: send file without specifying the issue date', () => {
    components.inputText('#cnpj','01820394000197')
    components.inputText('#valor','1000000')
    components.inputText('#numeroRPS','123456')
    components.inputText('#dataEmissao',' ')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, insira a data de emissão da Nota Fiscal.')
  });

  it('Input data validation test: attempt to pass invalid date', () => {
    components.inputText('#dataEmissao','34102024')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Data Inválida!Por favor, digite uma data válida!')
  });

  it('Input data validation test: attempt to pass invalid month', () => {
    components.inputText('#dataEmissao','10202024')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Data Inválida!O mês deve ser um valor entre 01 e 12!')
  });

  it('Input data validation test: attempt to pass previous to current', () => {
    components.inputText('#dataEmissao','10012023')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Data Inválida!A data de emissão deve ser a partir do ano de 2024!')
  });

  it('Input data validation test: attempt to pass a number after the current year', () => {
    components.inputText('#dataEmissao','10012030')
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Data Inválida!O ano de emissão não pode ser posterior ao ano atual!')
  });

  it('upload file validation: attempt to upload a .json file', () => {
    components.uploadFile('example.json','#upload','json') 
    components.verifySwalMessage('Por favor, selecione um arquivo PDF.')
  });

  it('File submission validation test', () => {
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Por favor, insira o número de CNPJ da loja.')
  });

  it('Send invoice successfully', () => {
    components.inputText('#cnpj','73750318000163')
    components.inputText('#valor','1000000')
    components.inputText('#numeroRPS','474622')
    components.inputText('#dataEmissao','01012024')
    components.uploadFile('teste.pdf','#upload','pdf') 
    components.clickButton('.bg-button-primary')
    components.verifySwalMessage('Já existe uma Nota Fiscal cadastrada para o mesmo mês e ano. Deseja substituí-la?')
    components.clickButtonSwalConfirm()
    components.verifySwalMessage('Nota Fiscal salva com sucesso!')
  });

  it('page notaFiscal: upload invoice', () => {
    cy.visit('/pages/notaFiscal')
    components.verifyTextExists('.justify-start','Notas Fiscais')
    components.clickButton('#downloadbf5f41fd-4f1b-47c2-954d-3e431f3318bb')
  });

})