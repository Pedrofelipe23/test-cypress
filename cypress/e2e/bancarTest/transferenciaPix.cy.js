import Components from "../../support/elements/Components"

describe('BanCar - page transferenciaPix', () => {

    beforeEach(() => {
        cy.visit('/pages/transferenciaPix')
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
      }) 

    it('Entering the transferenciaPix page',() => {
        Components.verifyTextExists('#keysDiv > .text-heading-5','Selecione a Chave PIX')
        Components.verifyTextExists('section.flex > .flex-col > .font-semibold','Para quem você quer transferir?')
    })

    it('Trying to send PIX without selecting a key type',() => {
        Components.clickButton('#continuar')
        Components.verifySwalMessage('Por favor, selecione o tipo da chave pix para prosseguir.')
    })

    it('Validation of the field when it is an email-type PIX key',() => {
        Components.selectFieldValue('#pix','E-mail')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('Por favor, insira a chave pix do tipo e-mail para prosseguir.')
    })

    it('Validation if email type PIX key exists',() => {
        Components.selectFieldValue('#pix','E-mail')
        Components.inputText('#chaveEmail','pedro@wj.com')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('A chave está correta?')
        Components.verifySwalMessage('E-mail: pedro@wj.com')
        Components.clickButtonSwalConfirm()
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao EMAIL informado.')
    })

    it('Validation of the field when it is of the email type',() => {
        Components.selectFieldValue('#pix','E-mail')
        Components.inputText('#chaveEmail','pedro123')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('E-mail Inválido!')
        Components.verifySwalMessage('Por favor, preencha o campo corretamente!')
    })

    it('Validation of the field when it is a PIX key of the Cellular type',() => {
        Components.selectFieldValue('#pix','Celular')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('Por favor, insira a chave pix do tipo celular para prosseguir.')
    })

    it('Validation if PIX key of type Cellphone exists',() => {
        Components.selectFieldValue('#pix','Celular')
        Components.inputText('#chaveCelular','21999999999')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('A chave está correta?')
        Components.verifySwalMessage('Celular: (21) 99999-9999')
        Components.clickButtonSwalConfirm()
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao CELULAR informado.')
    })

    it('Validation of the field when it is of the Cellular type',() => {
        Components.selectFieldValue('#pix','Celular')
        Components.inputText('#chaveCelular','12345')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('Número Inválido!')
        Components.verifySwalMessage('Por favor, digite o seu DDD e número de contato corretamente!')
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
        Components.selectFieldValue('#pix','CNPJ')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('Por favor, insira a chave pix do tipo CNPJ para prosseguir.')
    })

    it('Validation if PIX key of the CNPJ type exists',() => {
        Components.selectFieldValue('#pix','CNPJ')
        Components.inputText('#chaveCnpj','01051944000150')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('A chave está correta?')
        Components.verifySwalMessage('CNPJ: 01.051.944/0001-50')
        Components.clickButtonSwalConfirm()
        //Components.verifySwalMessage('A chave informada não existe ou não pertence ao CNPJ informado.')
    })

    it('Validation of the field when it is of the CNPJ type',() => {
        Components.selectFieldValue('#pix','CNPJ')
        Components.inputText('#chaveCnpj','0105')
        Components.clickButton('#continuar')
        Components.verifySwalMessage('CNPJ Inválido!')
        Components.verifySwalMessage('Por favor, preencha o campo corretamente!')
    })

    it('Field validation when the CNPJ type PIX key is already registered.',() => {
        Components.selectFieldValue('#pix','CNPJ')
        Components.inputText('#chaveCnpj','30767656000103')
        Components.clickButton('#continuar')
        Components.clickButtonSwalConfirm()
        Components.verifySwalMessage('Esta chave já foi cadastrada, por favor consulte na lista abaixo ou procure o suporte.')
    })

    it('validating functionality on the transfer button with registered (saved) PIX key',() => {
        Components.verifyTextExists('.odd > [tabindex="0"]','Chave aleatória')
        Components.verifyTextExists('.odd > :nth-child(2)','ba5939af-ce7c-46f5-b451-5bf5b90e9543')
        Components.verifyTextExists('.odd > :nth-child(3)','BANCO INTER S.A.')
    })

    it('Enter the transfer page', () => {
        Components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        Components.verifyTextExists('#valueDiv > .text-heading-5','Insira o Valor Desejado')
    });

    it('Try to transfer zero value', () => {
        Components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        Components.verifyTextExists('#valueDiv > .bg-surface > .flex-col > .font-semibold','Quanto você quer transferir?')
        Components.clearInputText('#valor')
        Components.inputText('#valor','0')
        Components.clickButton('#continuar2')
        Components.verifySwalMessage('Por favor, insira um valor válido.')
    });

    it('Try to transfer cent value with one digit', () => {
        Components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        Components.clearInputText('#valor')
        Components.inputText('#valorCentavos','0')
        Components.clickButton('#continuar2')
        Components.verifySwalMessage('Por favor, informe o valor dos centavos com dois dígitos.')
    });

    it('Trying to transfer an amount greater than the account balance', () => {
        Components.clickButton('.odd > :nth-child(4) > div.flex > .cursor-pointer')
        Components.clearInputText('#valor')
        Components.inputText('#valorCentavos','01')
        Components.clickButton('#continuar2')
        Components.verifySwalMessage('O valor informado excede o saldo da conta.  Por favor, insira um valor válido antes de continuar.')
    });


    /*
    Bugs encontrados: 

        Ao tentar validar CNPJ ja cadastrado menssagem de erro nao está sendo exibida na tela.
        'Esta chave já foi cadastrada, por favor consulte na lista abaixo ou procure o suporte.'

         Ajustar as mensagens de dentro do swal - colocar "e-mail" 
         colocar todos os "PIX" em maiúsculo  

    */

})    