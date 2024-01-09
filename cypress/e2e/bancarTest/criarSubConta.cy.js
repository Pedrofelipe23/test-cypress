describe('Validações dos campos para o cadastramento de conta.', () => {

    beforeEach(() => {
        cy.visit('https://bancar.inf.br/pay/login/auth')
      }) 


    it('Entrando na pagina cadastramento de conta',()=>{
        cy.get('a.text-secondary').should('contain','Faça seu cadastro aqui')
        cy.get('a.text-secondary').click()

        cy.contains('Cadastrar conta').should('contain','Cadastrar conta')
        cy.get('.text-secondary').should('contain','Preencha os campos abaixo com os dados da sua conta')
    })
    
///// verificando todas as validações dos campos para cadastramento de conta

    it('Validação campo CNPJ com dados invalidos',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('11111111111111')
        cy.get(':nth-child(2) > .hidden').click()

        cy.get('#swal2-content > p')
            .contains('CNPJ Inválido! Por favor, preencha o campo corretamente!');
    })

    it('Validação campo CNPJ sem retornar dados na api empresaAqui',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()

        cy.get('#nome').should('not.be.disabled')
        cy.get('#email').should('not.be.disabled')
        cy.get('#password').should('not.be.disabled')
        cy.get('#confirmedPassword').should('not.be.disabled')
        cy.get('#mobilePhone').should('not.be.disabled')
        cy.get('#cep').should('not.be.disabled')
        cy.get('#endereco').should('not.be.disabled')
        cy.get('#bairro').should('not.be.disabled')
        cy.get('#numero').should('not.be.disabled')
    })

    it('Retorno da api empresaAqui apos request no campo CNPJ',()=>{
        cy.get('a.text-secondary').click() 
        cy.get('#cnpj').type('05495002000112')
        cy.get(':nth-child(2) > .hidden').click()
        cy.wait(2000)
        cy.get('#nome').should('have.value','WINO INTERATIVA LTDA')
        cy.get('#cep').should('have.value','36660000')
        cy.get('#endereco').should('have.value','PRACA CORONEL BREVES')
        cy.get('#bairro').should('have.value','SAO JOSE')
        cy.get('#numero').should('have.value','86')
    })

    it('Validação campo E-mail de Login',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#email').type('abc@123')
        cy.get('#continuar').click()

        cy.get('#swal2-content > p')
            .contains('E-mail Inválido! Por favor, preencha o campo corretamente');
    })

    it('Validação campo Telefone Fixo',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#phone').type('99999')
        cy.get('#continuar').click()

        cy.get('#swal2-content > p')
            .contains('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    it('Validação campo Telefone Celular',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#mobilePhone').type('99999')
        cy.get('#continuar').click()

        cy.get('#swal2-content > p')
            .contains('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    // it('Validação campo Data de Nascimento',()=>{
    //     cy.get('a.text-secondary').click()
    //     cy.get('#birthDate').type('12')
    //     cy.get('#continuar').click()
    //     cy.get('#swal2-content > p')
    //         .contains('Data Inválida!Por favor, digite uma data válida!');
    // })

    it('Validação campo CEP',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#cep').type('12345678')
        cy.get('#continuar').click()

        cy.get('#swal2-content > p')
            .contains('CEP Inválido! Por favor, preencha o campo corretamente!');
    })

    it('Validação de mascara campo CEP ',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#cep').type('12345')
        cy.get('#continuar').click()

        cy.get('#swal2-content > p')
            .contains('O CEP deve conter 8 dígitos. Por favor, preencha corretamente.');
    })

    it('Validação campo senha e confimar senha',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()

        cy.get('#tipoConta').then(($select) => {
            cy.wrap($select).select('Individual', { force: true });
        });

        cy.get('#password').type('Wino@2330')
        cy.get('#confirmedPassword').type('Wino@2024')
        cy.get('#continuar').click()
        cy.get('#swal2-content')
            .contains('As senhas informadas não coincidem. Por favor, verifique e tente novamente.');
    })

    it('Validação campo senha',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cnpj').type('84595238000105')
        cy.get(':nth-child(2) > .hidden').click()

        cy.get('#password').type('123456')
        cy.get(':nth-child(2) > .hidden').click()
        cy.get('#swal2-content')
            .contains('A senha deve conter, ao menos: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e deve ter no mínimo 8 caracteres no total.');
    })


    


})    