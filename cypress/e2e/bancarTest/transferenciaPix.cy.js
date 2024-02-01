import components from "../../support/elements/Components"

describe('BanCar - page transferenciaPix', () => {

    beforeEach(() => {
        cy.visit('/pages/transferenciaPix')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
      })

    it('Entering the transferenciaPix page',() => {
        components.verifyTextExists('#keysDiv > .text-heading-5','Selecione a Chave PIX')
        components.verifyTextExists('section.flex > .flex-col > .font-semibold','Para quem você quer transferir?')
        cy.wait(2000)
        //components.screenshot('Entering the transferenciaPix page')
    })

    it('Trying to send PIX without selecting a key type',() => {
        components.clickButton('#continuar')
        components.verifySwalMessage('Por favor, selecione o tipo da chave pix para prosseguir.')
        cy.wait(2000)
        //components.screenshot('Trying to send PIX without selecting a key type')
    })

    it('Validation of the field when it is an email-type PIX key',() => {
        components.selectFieldValue('#pix','E-mail')
        components.clickButton('#continuar')
        components.verifySwalMessage('Por favor, insira a chave pix do tipo e-mail para prosseguir.')
        cy.wait(2000)
        //components.screenshot('Validation of the field when it is an email-type PIX key')
    })

    it('Validation if email type PIX key exists',() => {
        components.selectFieldValue('#pix','E-mail')
        components.inputText('#chaveEmail','pedro@wj.com')
        components.clickButton('#continuar')
        components.verifySwalMessage('A chave está correta?')
        components.verifySwalMessage('E-mail: pedro@wj.com')
        components.clickButtonSwalConfirm()
        cy.wait(2000)
        //components.screenshot('Validation if email type PIX key exists')
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao EMAIL informado.')
    })

    it('Validation of the field when it is of the email type',() => {
        components.selectFieldValue('#pix','E-mail')
        components.inputText('#chaveEmail','pedro123')
        components.clickButton('#continuar')
        components.verifySwalMessage('E-mail Inválido!')
        components.verifySwalMessage('Por favor, preencha o campo corretamente!')
        cy.wait(2000)
        //components.screenshot('Validation of the field when it is of the email type')
    })

    it('Validation of the field when it is a PIX key of the Cellular type',() => {
        components.selectFieldValue('#pix','Celular')
        components.clickButton('#continuar')
        components.verifySwalMessage('Por favor, insira a chave pix do tipo celular para prosseguir.')
        cy.wait(2000)
        //components.screenshot('Validation of the field when it is a PIX key of the Cellular type')
    })

    it('Validation if PIX key of type Cellphone exists',() => {
        components.selectFieldValue('#pix','Celular')
        components.inputText('#chaveCelular','21999999999')
        components.clickButton('#continuar')
        components.verifySwalMessage('A chave está correta?')
        components.verifySwalMessage('Celular: (21) 99999-9999')
        components.clickButtonSwalConfirm()
        cy.wait(2000)
        //components.screenshot('Validation if PIX key of type Cellphone exists')
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao CELULAR informado.')
    })

    it('Validation of the field when it is of the Cellular type',() => {
        components.selectFieldValue('#pix','Celular')
        components.inputText('#chaveCelular','12345')
        components.clickButton('#continuar')
        components.verifySwalMessage('Número Inválido!')
        components.verifySwalMessage('Por favor, digite o seu DDD e número de contato corretamente!')
        cy.wait(2000)
        //components.screenshot('Validation of the field when it is of the Cellular type')
    })

    // it('Field validation when it is a PIX key of the CPF type',() => {
    //     Components.selectFieldValue('#pix','CPF')
    //     Components.clickButton('#continuar')
    //     Components.verifySwalMessage('Por favor, insira a chave pix do tipo CPF para prosseguir.')
    // })

    // it('Validation if PIX key of type CPF exists',() => {
    //     cy.get('#pix').then(($select) => {
    //         cy.wrap($select).select('CPF', { force: true });
    //     });
    //     cy.get('#chaveCpf').type('16776548722')
    //     cy.get('#continuar').click()
    //     cy.get('#swal2-content')
    //         .should('contain', 'Ocorreu um erro ao buscar instituição financeira, por favor entre em contato com o suporte.')
    // })

    // it('Validation of the field when it is of the CPF type',() => {
    //     cy.get('#pix').then(($select) => {
    //         cy.wrap($select).select('CPF', { force: true });
    //     });
    //     cy.get('#chaveCpf').type('12345')
    //     cy.get('#continuar').click()
    //     cy.get('#swal2-content').should('contain', 'CPF Inválido!')
    //     cy.get('#swal2-content').should('contain', 'Por favor, preencha o campo corretamente!')
    // })

    it('Validation of the field when it is a PIX key of the CNPJ type',() => {
        components.selectFieldValue('#pix','CNPJ')
        components.clickButton('#continuar')
        components.verifySwalMessage('Por favor, insira a chave pix do tipo CNPJ para prosseguir.')
        cy.wait(2000)
       // components.screenshot('Validation of the field when it is a PIX key of the CNPJ type')
    })

    it('Validation if PIX key of the CNPJ type exists',() => {
        components.selectFieldValue('#pix','CNPJ')
        components.inputText('#chaveCnpj','01051944000150')
        components.clickButton('#continuar')
        components.verifySwalMessage('A chave está correta?')
        components.verifySwalMessage('CNPJ: 01.051.944/0001-50')
        components.clickButtonSwalConfirm()
        cy.wait(2000)
        //components.screenshot('Validation if PIX key of the CNPJ type exists')
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao CNPJ informado.')
    })

    it('Validation of the field when it is of the CNPJ type',() => {
        components.selectFieldValue('#pix','CNPJ')
        components.inputText('#chaveCnpj','0105')
        components.clickButton('#continuar')
        components.verifySwalMessage('CNPJ Inválido!')
        components.verifySwalMessage('Por favor, preencha o campo corretamente!')
        cy.wait(2000)
        //components.screenshot('Validation of the field when it is of the CNPJ type')
    })

    it('Field validation when the CNPJ type PIX key is already registered.',() => {
        components.selectFieldValue('#pix','CNPJ')
        components.inputText('#chaveCnpj','30767656000103')
        components.clickButton('#continuar')
        components.clickButtonSwalConfirm()
        components.verifySwalMessage('Esta chave já foi cadastrada, por favor consulte na lista abaixo ou procure o suporte.')
        cy.wait(2000)
        //components.screenshot('Field validation when the CNPJ type PIX key is already registered')
    })

    it('validating functionality on the transfer button with registered (saved) PIX key',() => {
        components.verifyTextExists('#table_wrapper','ba5939af-ce7c-46f5-b451-5bf5b90e9543')
        components.verifyTextExists('#table_wrapper','BANCO INTER S.A.')
        cy.wait(2000)
        //components.screenshot('validating functionality on the transfer button with registered (saved) PIX key')
    })

    it('Enter the transfer page', () => {
        components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        components.verifyTextExists('#valueDiv > .text-heading-5','Insira o Valor Desejado')
        cy.wait(2000)
        //components.screenshot('Enter the transfer page')
    });

    it('Try to transfer zero value', () => {
        components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        components.verifyTextExists('#valueDiv > .bg-surface > .flex-col > .font-semibold','Quanto você quer transferir?')
        components.clearInputText('#valor')
        components.inputText('#valor','0')
        components.clickButton('#continuar2')
        components.verifySwalMessage('Por favor, insira um valor válido.')
        cy.wait(2000)
        //components.screenshot('Try to transfer zero value')
    });

    it('Try to transfer cent value with one digit', () => {
        components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        components.clearInputText('#valor')
        components.inputText('#valorCentavos','0')
        components.clickButton('#continuar2')
        components.verifySwalMessage('Por favor, informe o valor dos centavos com dois dígitos.')
        cy.wait(2000)
        //components.screenshot('Try to transfer cent value with one digit')
    });

    it('Trying to transfer an amount greater than the account balance', () => {
        components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        components.clearInputText('#valor')
        components.inputText('#valorCentavos','02')
        components.clickButton('#continuar2')
        components.verifySwalMessage('O valor informado excede o saldo da conta.  Por favor, insira um valor válido antes de continuar.')
        cy.wait(2000)
        //components.screenshot('Trying to transfer an amount greater than the account balance')
    });

    it('Trying to transfer an amount greater than the account balance', () => {
        components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        components.clearInputText('#valor')
        components.inputText('#valorCentavos','01')
        components.clickButton('#continuar2')
        components.verifySwalMessage('O valor deve ser maior que R$ 0,01.')
        cy.wait(2000)
        //components.screenshot('Trying to transfer an amount greater than the account balance')
    });


})    