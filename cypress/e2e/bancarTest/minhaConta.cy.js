import components from "../../support/elements/Components";

describe('BanCar - minhaConta', () => {

    beforeEach(() => {
        cy.visit('/pages/minhaConta')
        cy.login('matheus123@gmail.com', '12345678Ti@')
    })

    it('my account page', () => {
        components.verifyTextExists('#nome','MATHEUS PJ')
        components.verifyTextExists('#email','matheus123@gmail.com')
        cy.wait(2000)
        //components.screenshot('my account page')
    });

    it('accessing personal data', () => {
        components.verifyTextExists('#dadosPessoais > .justify-between > :nth-child(2) > .text-heading-5','Dados Pessoais')
        components.verifyTextExists('#dadosPessoais > .justify-between > :nth-child(2) > .text-subtitle','Suas informações básicas')
        components.clickButton('#dadosPessoais')
        components.verifyTextExists('#razaoSocial','matheus pj')
        components.verifyTextExists('#cpfCnpj','86.336.791/0001-40')
        cy.wait(2000)
        //components.screenshot('accessing personal data')
    });

    it('personal data: change of email', () => {
        components.clickButton('#dadosPessoais')
        components.verifyTextExists('#email','matheus123@gmail.com')
        components.clickButton('#alterarEmail')
        components.verifyTextExists('.grid > .p-4','Ao alterar o endereço de e-mail, o novo deverá ser usado para realizar o login na conta.')
        cy.wait(2000)
        //components.screenshot('personal data: change of email')
    });

    it('personal data: validation change email without filling in field', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: validation change email without filling in field')
    });

    it('personal data: input change email validation', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.inputText('#emailModal','pedro123')
        components.checkHaveThisValue('#emailModal','pedro123')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('E-mail Inválido!  Por favor, preencha o campo corretamente!')
        cy.wait(2000)
        //components.screenshot('personal data: input change email validation')
    });

    it('personal data: change email without typing in the confirm email field', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.inputText('#emailModal','matheus123@gmail.com')
        components.checkHaveThisValue('#emailModal','matheus123@gmail.com')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('Por favor, preencha o campo "Confirmar Novo E-mail"!')
        cy.wait(2000)
        //components.screenshot('personal data: email change successfully')
    });

    it('personal data: attempt to change email with current email', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.inputText('#emailModal','matheus123@gmail.com')
        components.checkHaveThisValue('#emailModal','matheus123@gmail.com')
        components.inputText('#novoEmailModal','matheus123@gmail.com')
        components.checkHaveThisValue('#novoEmailModal','matheus123@gmail.com')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('Este e-mail é o atual cadastrado.')
        cy.wait(2000)
        //components.screenshot('personal data: email change successfully')
    });

    it('personal data: confirm email change with incorrect new one', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.inputText('#emailModal','matheus123@gmail.com')
        components.inputText('#novoEmailModal','pedro@gmail.com')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('Os campos de e-mail não coincidem.  Por favor, Verifique e digite corretamente.')
        cy.wait(2000)
        //components.screenshot('personal data: email change successfully')
    });

    it('personal data: email change successfully', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEmail')
        components.inputText('#password','12345678Ti@')
        components.clickButton('#passwordButton')
        components.inputText('#emailModal','matheus123@gmail.com')
        components.checkHaveThisValue('#emailModal','matheus123@gmail.com')
        components.inputText('#novoEmailModal','')
        components.checkHaveThisValue('#novoEmailModal','')
        components.clickButton('#changeMailButton')
        components.verifySwalMessage('eeee')
        cy.wait(2000)
        //components.screenshot('personal data: email change successfully')
    });

    it('personal data: change of phone number', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.verifyTextExists('#changePhoneTitle','Alterar Contato')
        components.verifyTextExists('#changePhone','Digite suas novas informações de contato.')
        cy.wait(2000)
        //components.screenshot('personal data: change of phone number')
    });

    it('personal data: validation change phone number without filling in field', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.clickButton('#changePhoneButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: validation change phone number without filling in field')
    });

    it('personal data: input change telephone validation', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.inputText('#phone','123456')
        components.checkHaveThisValue('#phone','123456')
        components.clickButton('#changePhoneButton')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!')
        cy.wait(2000)
        //components.screenshot('personal data: input change telephone validation')
    });

    it('personal data: input change mobile Phone validation', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.inputText('#mobilePhone','123456')
        components.checkHaveThisValue('#mobilePhone','123456')
        components.clickButton('#changePhoneButton')
        components.verifySwalMessage('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!')
        cy.wait(2000)
        //components.screenshot('personal data: input change mobile Phone validation')
    });

    it('personal data: change mobile Phone successfully', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.inputText('#mobilePhone','21999999999')
        components.checkHaveThisValue('#mobilePhone','(21) 99999-9999')
        components.clickButton('#changePhoneButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: change mobile Phone successfully')
    });

    it('personal data: change mobile telephone successfully', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarContato')
        components.inputText('#phone','2140028922')
        components.checkHaveThisValue('#phone','(21) 4002-8922')
        components.clickButton('#changePhoneButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: change mobile Phone successfully')
    });

    it('personal data: change of address', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEndereco')
        components.verifyTextExists('#changeAddressTitle','Alterar Endereço')
        components.verifyTextExists('#changeAddress','Busque o novo endereço pelo CEP e/ou complete os campos.')
        cy.wait(2000)
        //components.screenshot('personal data: change of address')
    });

    it('personal data: validation change address without filling in field', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEndereco')
        components.clickButton('#changeAddressButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: validation change address without filling in field')
    });

    it('personal data: input change address validation', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEndereco')
        components.inputText('#cep','123456')
        components.clickButton('#changeAddressButton')
        components.verifySwalMessage('CEP Inválido!  Por favor, preencha o campo corretamente!')
        cy.wait(2000)
        //components.screenshot('personal data: input change address validation')
    });

    it('personal data: change address successfully', () => {
        components.clickButton('#dadosPessoais')
        components.clickButton('#alterarEndereco')
        components.inputText('#cep','22783113')
        components.inputText('#numero','10')
        components.checkHaveThisValue('#bairro','Vargem Pequena')
        components.checkHaveThisValue('#logradouro','Estrada dos Bandeirantes')
        components.checkHaveThisValue('#cidade','Rio de Janeiro')
        components.clickButton('#changeAddressButton')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('personal data: change address successfully')
    });

    it('accessing account data', () => {
        components.clickButton('#dadosConta')
        components.verifyTextExists('.text-heading-4','Dados da Conta')
        components.verifyTextExists('#razaoAndDoc','Razão Social')
        components.verifyTextExists('#razaoAndDoc','CNPJ')
        components.verifyTextExists('#contaDiv','Conta')
        components.verifyTextExists('#contaDiv','Agencia')
        cy.wait(2000)
    });

    it('accessing PIX keys', () => {
        components.clickButton('#chavesPix')
        components.verifyTextExists('.text-heading-5','Chaves Pix Cadastradas')
        cy.wait(2000)
    });

    it('accessing Terms and Privacy', () => {
        components.clickButton('#privacidade')
        cy.wait(2000)
    });

})