import components from "../../support/elements/Components"

describe('BanCar - criarSubConta: Validações dos campos para cadastramento de conta.', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
      }) 

    it('Entering the account registration page',()=>{
        components.verifyTextExists('a.text-secondary','Faça seu cadastro aqui')
        components.clickButton('a.text-secondary')
        components.verifyTextExists('.justify-between > :nth-child(1) > .font-semibold','Cadastrar conta')
        components.verifyTextExists('.justify-between > :nth-child(1) > .text-secondary','Preencha os campos abaixo com seus dados para criar a sua conta')
    })
    
///// verificando todas as validações dos campos para cadastramento de conta

    it('CNPJ field validation with invalid data',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','11111111111111')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.verifySwalMessage('CNPJ Inválido!');
        components.verifySwalMessage('Por favor, preencha o campo corretamente!');
    })

    it('CNPJ field validation without returning data in the api empresaAqui',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.verifyTagNotBeDisable('#nome')
        components.verifyTagNotBeDisable('#email')
        components.verifyTagNotBeDisable('#password')
        components.verifyTagNotBeDisable('#confirmedPassword')
        components.verifyTagNotBeDisable('#mobilePhone')
        components.verifyTagNotBeDisable('#cep')
        components.verifyTagNotBeDisable('#endereco')
        components.verifyTagNotBeDisable('#bairro')
        components.verifyTagNotBeDisable('#numero')
        components.verifyTagNotBeDisable('#cidade')
    })

    it('Return true api empresaAqui after request in the CNPJ field',()=>{
        components.clickButton('a.text-secondary') 
        components.inputText('#cnpj','05495002000112')
        components.clickButton('.p-1 > .text-palatinate-400')
        cy.wait(2000)
        components.checkHaveThisValue('#nome','WINO INTERATIVA LTDA')
        components.checkHaveThisValue('#cep','36660000')
        components.checkHaveThisValue('#endereco','PRACA CORONEL BREVES')
        components.checkHaveThisValue('#bairro','SAO JOSE')
        components.checkHaveThisValue('#numero','86')
    })

    it('Login Email field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#email','abc@123')
        components.clickButton('#continuar')
        components.verifySwalMessage('E-mail Inválido!');
        components.verifySwalMessage('Por favor, preencha o campo corretamente');
    })

    it('Landline Telephone field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#phone','99999')
        components.clickButton('#continuar')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    it('Cell phone field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#phone','99999')
        components.clickButton('#continuar')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    // it('Validação campo Data de Nascimento',()=>{
    //     cy.get('a.text-secondary').click()
    //     cy.get('#birthDate').type('12')
    //     cy.get('#continuar').click()
    //     cy.get('#swal2-content > p')
    //         .contains('Data Inválida!Por favor, digite uma data válida!');
    // })

    it('CEP field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#cep','12345678')
        components.clickButton('#continuar')
        components.verifySwalMessage('CEP Inválido!')
        components.verifySwalMessage('Por favor, preencha o campo corretamente!')
    })

    it('CEP field mask validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#cep','12345')
        components.clickButton('#continuar')
        components.verifySwalMessage('O CEP deve conter 8 dígitos.')
        components.verifySwalMessage('Por favor, preencha corretamente.')
    })

    it('Validate password field and confirm password',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.selectFieldValue('#tipoConta','Individual')
        components.inputText('#password','Wino@2330')
        components.inputText('#confirmedPassword','Wino@2024')
        components.clickButton('#continuar')
        components.verifySwalMessage('As senhas informadas não coincidem.');
        components.verifySwalMessage('Por favor, verifique e tente novamente.');
    })

    it('Password field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.inputText('#password','123456')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.verifySwalMessage('A senha deve conter, ao menos: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e deve ter no mínimo 8 caracteres no total.');
    })

    it('Validating terms of use and conditions',()=>{
        components.clickButton('a.text-secondary')
        components.verifyTextExists('.p-1 > .flex','Li e estou de acordo')
        components.clickButton('.p-1 > .text-palatinate-400')
        components.verifyTextExists('#termsOfUseTitle','Termos de Uso')
        components.verifyTextExists('.relative > .text-heading-4','Bem-vindo(a) ao Bancar!')
        components.verifyTextExists('.m-4 > .relative > :nth-child(2)','Estes Termos de Uso regem o uso dos nossos serviços, então, por favor, leia atentamente.')
        components.verifyTextExists('.mb-8.underline','Ao acessar ou utilizar o Bancar, você concorda com estes termos.')
    })

})    