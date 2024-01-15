describe('BanCar - destinoTransferenciaPix', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/eva/pages/destinoTransferenciaPix')
        cy.get('.mb-4 > .text-secondary').should('contain', 'Preencha os campos abaixo com seus dados')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
      }) 

    it('Entrando na page destinoTransferenciaPix',() => {
        cy.get('#keysDiv > .text-heading-5').should('contain', 'Selecione a Chave PIX')
        cy.get('section.flex > .flex-col > .font-semibold').should('contain', 'Para quem você quer transferir?')
    })

    it('Tentar enviar PIX sem selecionar um tipo de chave',() => {
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Por favor, selecione o tipo da chave pix para prosseguir.')
    })

    it('Validação do campo quando for chave PIX do tipo e-mail',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('E-mail', { force: true });
        });
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Por favor, insira a chave pix do tipo e-mail para prosseguir.')
    })

    it('Validação se chave PIX do tipo e-mail existe',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('E-mail', { force: true });
        });
        cy.get('#chaveEmail').type('pedro@wj.com')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'A chave informada não existe ou não pertence ao EMAIL informado.')
    })

    it('Validação do campo quando for do tipo e-mail',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('E-mail', { force: true });
        });
        cy.get('#chaveEmail').type('abc123')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'E-mail Inválido!')
        cy.get('#swal2-content').should('contain', 'Por favor, preencha o campo corretamente!')
    })

    it('Validação do campo quando for chave PIX do tipo Celular',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('Celular', { force: true });
        });
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Por favor, insira a chave pix do tipo celular para prosseguir.')
    })

    it('Validação se chave PIX do tipo Celular existe',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('Celular', { force: true });
        });
        cy.get('#chaveCelular').type('21999999999')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'A chave informada não existe ou não pertence ao CELULAR informado.')
    })

    it('Validação do campo quando for do tipo Celular',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('Celular', { force: true });
        });
        cy.get('#chaveCelular').type('12345')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Número Inválido!')
        cy.get('#swal2-content').should('contain', 'Por favor, digite o seu DDD e número de contato corretamente!')
    })

    it('Validação do campo quando for chave PIX do tipo CPF',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CPF', { force: true });
        });
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Por favor, insira a chave pix do tipo CPF para prosseguir.')
    })

    it('Validação se chave PIX do tipo CPF existe',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CPF', { force: true });
        });
        cy.get('#chaveCpf').type('16776548722')
        cy.get('#continuar').click()
        cy.get('#swal2-content')
            .should('contain', 'Ocorreu um erro ao buscar instituição financeira, por favor entre em contato com o suporte.')
    })

    it('Validação do campo quando for do tipo CPF',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CPF', { force: true });
        });
        cy.get('#chaveCpf').type('12345')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'CPF Inválido!')
        cy.get('#swal2-content').should('contain', 'Por favor, preencha o campo corretamente!')
    })

    it('Validação do campo quando for chave PIX do tipo CNPJ',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CNPJ', { force: true });
        });
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'Por favor, insira a chave pix do tipo CNPJ para prosseguir.')
    })

    it('Validação se chave PIX do tipo CNPJ existe',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CNPJ', { force: true });
        });
        cy.get('#chaveCnpj').type('01051944000150')
        cy.get('#continuar').click()
        cy.get('#swal2-content')
            .should('contain', 'A chave informada não existe ou não pertence ao CNPJ informado.')
    })

    it('Validação do campo quando for do tipo CNPJ',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CNPJ', { force: true });
        });
        cy.get('#chaveCnpj').type('12345')
        cy.get('#continuar').click()
        cy.get('#swal2-content').should('contain', 'CNPJ Inválido!')
        cy.get('#swal2-content').should('contain', 'Por favor, preencha o campo corretamente!')
    })

    it('Validação do campo quando a chave PIX do tipo CNPJ já estiver cadastrada.',() => {
        cy.get('#pix').then(($select) => {
            cy.wrap($select).select('CNPJ', { force: true });
        });
        cy.get('#chaveCnpj').type('30767656000103')
        cy.get('#continuar').click()
        cy.get('#swal2-content')
            .should('contain', 'Esta chave já foi cadastrada, por favor consulte na lista abaixo ou procure o suporte.')
    })

    it('validando funcionalidade no botão de transfirir com chave PIX cadastrada(salva)',() => {
        cy.get('[tabindex="0"] > .flex').should('contain', '30.767.656/0001-03')
        cy.get('.odd > :nth-child(2)').should('contain', '461 - ASAAS GESTAO FINANCEIRA INSTITUICAO DE PAGAMENTO S.A')
        cy.get('div.flex > .cursor-pointer').click()
    })

    /*
    Bugs encontrados: 

        Ao tentar validar CNPJ ja cadastrado menssagem de erro nao está sendo exibida na tela.
        'Esta chave já foi cadastrada, por favor consulte na lista abaixo ou procure o suporte.'

         Ajustar as mensagens de dentro do swal - colocar "e-mail" 
         colocar todos os "PIX" em maiúsculo  

    */

})    