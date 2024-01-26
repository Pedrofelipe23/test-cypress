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
        cy.wait(2000)
        //components.screenshot('Entering the account registration page')
    })
    
///// verificando todas as validações dos campos para cadastramento de conta

    it('CNPJ field validation with invalid data',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','11111111111111')
        components.clickButton('#firstForm > .font-semibold')
        components.verifySwalMessage('CNPJ Inválido!');
        components.verifySwalMessage('Por favor, preencha o campo corretamente!');
        cy.wait(2000)
        //components.screenshot('CNPJ field validation with invalid data')
    })

    it('CNPJ field validation without returning data in the api empresaAqui',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
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
        cy.wait(2000)
        //components.screenshot('CNPJ field validation without returning data in the api empresaAqui')
    })

    it('Return true api empresaAqui after request in the CNPJ field',()=>{
        components.clickButton('a.text-secondary') 
        components.inputText('#cnpj','05495002000112')
        components.clickButton('#firstForm > .font-semibold')
        cy.wait(1000)
        components.checkHaveThisValue('#nome','WINO INTERATIVA LTDA')
        cy.wait(2000)
        //components.screenshot('Return true api empresaAqui after request in the CNPJ field')
    })

    it('Login Email field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#email','abc@123')
        components.clickButton('#continuar')
        components.verifySwalMessage('E-mail Inválido!');
        components.verifySwalMessage('Por favor, preencha o campo corretamente');
        cy.wait(2000)
        //components.screenshot('Login Email field validation')
    })

    it('Landline Telephone field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#phone','99999')
        components.clickButton('#continuar')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
        cy.wait(2000)
        //components.screenshot('Landline Telephone field validation')
    })

    it('Cell phone field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#phone','99999')
        components.clickButton('#continuar')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
        cy.wait(2000)
        //components.screenshot('Cell phone field validation')
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
        components.inputText('#cnpj','05495002000112')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#email','test@wj.com')
        components.inputText('#confirmedMail','test@wj.com')
        components.inputText('#password','Pedro@123')
        components.inputText('#confirmedPassword','Pedro@123')
        components.inputText('#mobilePhone','21999999999')
        components.clickButton('#continuar')
        components.clearInputText('#cep')
        components.inputText('#cep','12345678')
        components.clickButton('.custom-checkbox')
        components.verifySwalMessage('CEP Inválido!')
        components.verifySwalMessage('Por favor, preencha o campo corretamente!')
        cy.wait(2000)
        //.screenshot('CEP field validation')
    })

    it('CEP field mask validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','05495002000112')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#email','test@wj.com')
        components.inputText('#confirmedMail','test@wj.com')
        components.inputText('#password','Pedro@123')
        components.inputText('#confirmedPassword','Pedro@123')
        components.inputText('#mobilePhone','21999999999')
        components.clickButton('#continuar')
        components.inputText('#cep','12345')
        components.clickButton('#finalizar')
        components.verifySwalMessage('O CEP deve conter 8 dígitos.')
        components.verifySwalMessage('Por favor, preencha corretamente.')
        cy.wait(2000)
        //components.screenshot('CEP field mask validation')
    })

    it('Validate password field and confirm password',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
        components.selectFieldValue('#tipoConta','Individual')
        components.inputText('#password','Wino@2330')
        components.inputText('#confirmedPassword','Wino@2024')
        components.clickButton('#continuar')
        components.verifySwalMessage('As senhas informadas não coincidem.');
        components.verifySwalMessage('Por favor, verifique e tente novamente.');
        cy.wait(2000)
        //components.screenshot('Validate password field and confirm password')
    })

    it('Password field validation',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','84595238000105')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#password','123456')
        components.clickButton('#firstForm > .font-semibold')
        components.verifySwalMessage('A senha deve conter, ao menos: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e deve ter no mínimo 8 caracteres no total.');
        cy.wait(2000)
        //components.screenshot('Password field validation')
    })

    it('Validating terms of use and conditions',()=>{
        components.clickButton('a.text-secondary')
        components.inputText('#cnpj','05495002000112')
        components.clickButton('#firstForm > .font-semibold')
        components.inputText('#email','test@wj.com')
        components.inputText('#confirmedMail','test@wj.com')
        components.inputText('#password','Pedro@123')
        components.inputText('#confirmedPassword','Pedro@123')
        components.inputText('#mobilePhone','21999999999')
        components.clickButton('#continuar')
        components.verifyTextExists('.p-1 > .flex','Li e estou de acordo')
        components.clickButton('#termosDiv ')
        components.verifyTextExists('#termsOfUseTitle','Termos de Uso')
        components.verifyTextExists('.m-4 > .relative','Bem-vindo(a) ao Bancar!')
        components.verifyTextExists('.m-4 > .relative','Os Termos de Uso e a Política de Privacidade regem o uso dos nossos serviços, então, por favor, leia atentamente.')
        components.clickButton('#acceptTerm')
        cy.wait(2000)
        //components.screenshot('Validating terms of use and conditions')
    })

})    