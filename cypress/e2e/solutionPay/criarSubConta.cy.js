describe('SolutionPay - Cadastrar Conta', () => {

    beforeEach(() => {
        cy.visit('https://desenv.vivabr.com.br/pay/login/auth')
      }) 


    it('Entrando na pagina cadastramento de conta',()=>{
        cy.get('a.text-secondary').should('contain','Fazer cadastro')
        cy.get('a.text-secondary').click()

        cy.contains('Cadastrar conta').should('contain','Cadastrar conta')
        cy.get('.text-secondary').should('contain','Preencha os campos abaixo com os dados da sua conta')
    })
    
///// verificando todas as validações dos inputs para cadastramento de conta

    //it('',()=>{})

    it('validação campo CPF ou CNPJ',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cpfCnpj').type('11111111111')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('Número de CPF/CNPJ Inválido! Por favor, preencha o campo corretamente!');
    })

    it('validação campo E-mail',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#email').type('abc@123')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('E-mail Inválido! Por favor, preencha o campo corretamente');
    })

    it('validação campo E-mail de Login',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#loginEmail').type('123@abc')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('E-mail Inválido! Por favor, preencha o campo corretamente');
    })

    //it('',()=>{})

    it('validação campo Telefone Fixo',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#phone').type('99999')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    it('validação campo Telefone Celular',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#mobilePhone').type('99999')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('Número Inválido!Por favor, digite o seu DDD e número de contato corretamente!');
    })

    it('validação campo Data de Nascimento',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#birthDate').type('12')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('Data Inválida!Por favor, digite uma data válida!');
    })

    it('validação campo CEP',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#cep').type('12345')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p')
            .contains('CEP Inválido! Por favor, preencha o campo corretamente!');
    })

    it('Tentativa de criar sem selecionar tipo de conta',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#nome').type('Pedro test')
        cy.get('#cpfCnpj').type('16776548722')
        cy.get('#email').type('pedro.pereirawj@gmail.com')
        cy.get('#loginEmail').type('pedro.pereirawj@gmail.com')
        cy.get('#phone').type('2140028922')
        cy.get('#mobilePhone').type('21999522536')
        cy.get('#birthDate').type('30061997')
        cy.get('#cep').type('22783113')
        cy.get('#numero').type('11')
        cy.get('#complemento').type('casa 10')
        cy.get('#continuar').click()

        cy.get('#swal2-content').contains('Por favor, selecione um tipo de conta para prosseguir.')

    })

    it('Tentativa de criar conta com email ja cadastrado',()=>{
        cy.get('a.text-secondary').click()

        cy.get('#tipoConta')
            .then(($select) => {
            cy.wrap($select).select('Individual', { force: true });
        });
        
        cy.get('#nome').type('Pedro test')
        cy.get('#cpf').type('16776548722')
        cy.get('#email').type('pedro.pereirawj@gmail.com')
        cy.get('#loginEmail').type('pedro.pereirawj@gmail.com')
        cy.get('#phone').type('2140028922')
        cy.get('#mobilePhone').type('21999522536')
        cy.get('#birthDate').type('30061997')
        cy.get('#cep').type('22783113')
        cy.get('#numero').type('11')
        cy.get('#complemento').type('casa 10')
        cy.get('#continuar').click()

    })
})    