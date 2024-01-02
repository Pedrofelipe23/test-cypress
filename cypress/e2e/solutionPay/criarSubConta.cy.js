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
    
///// verificando todas as validações dos inputs

    it('validação campo CPF ou CNPJ',()=>{
        cy.get('#cpfCnpj').type('123456')
        cy.get('#cpfCnpj').should('123456')
    })

    it.only('validação campo CPF ou CNPJ',()=>{
        cy.get('a.text-secondary').click()
        cy.get('#loginEmail').type('123456')
        cy.get('#continuar').click()
        cy.get('#swal2-content > p').contains('E-mail Inválido! Por favor, preencha o campo corretamente');
    })

})    