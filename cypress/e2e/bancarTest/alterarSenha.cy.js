import components from "../../support/elements/Components"


describe('BanCar - alterarSenha',() => {    

    beforeEach(() =>{
        components.setViewportTablet()
        cy.visit('/pages/alterarSenha')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
    })

    it('page to change your password', () => {
        components.verifyTextExists('.text-subtitle','A senha deve conter, ao menos: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e deve ter no mínimo 8 caracteres no total.')
        cy.wait(2000)
        //components.screenshot('page to change your password')
    });

    it('Trying to change password without entering current password', () => {
        components.inputText('#password','Pedro@123')
        components.inputText('#confirmedPassword','Pedro@123')
        components.clickButton('#redefinirSenha')
        components.verifySwalMessage('Por favor, preencha o campo "Senha Atual"!')
        cy.wait(2000)
        //components.screenshot('Trying to change password without entering current password')
    });

    it('Checking password validation', () => {
        components.inputText('#password','123')
        components.clickButton('#redefinirSenha')
        components.verifySwalMessage('A senha deve conter, ao menos: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e deve ter no mínimo 8 caracteres no total.')
        cy.wait(2000)
        //components.screenshot('Checking password validation')
    });

    it('Check password validation and password confirmation', () => {
        components.inputText('#currentPassword','12345678Ti@')
        components.inputText('#password','12345678Ti@')
        components.inputText('#confirmedPassword','Pedro@123')
        components.clickButton('#redefinirSenha')
        components.verifySwalMessage('Os campos "Nova Senha" e "Confirmar Senha" não coincidem.')
        components.verifySwalMessage('Por favor, verifique e tente novamente.')
        cy.wait(2000)
        //components.screenshot('Check password validation and password confirmation')
    });

    it('Attempt to change password with current password invalid', () => {
        components.inputText('#currentPassword','Pedro@123')
        components.inputText('#password','Pedro@123')
        components.inputText('#confirmedPassword','Pedro@123')
        components.clickButton('#redefinirSenha')
        components.verifySwalMessage('')
        cy.wait(2000)
        //components.screenshot('Attempt to change password with current password invalid')
    });

    it('Changing password correctly', () => {
        components.inputText('#currentPassword','12345678Ti@')
        components.inputText('#password','12345678Ti@')
        components.inputText('#confirmedPassword','12345678Ti@')
        components.clickButton('#redefinirSenha')
        components.verifySwalMessage('Senha alterada com sucesso!  Por favor, entre com sua nova senha.')
        cy.wait(2000)
        //components.screenshot('Changing password correctly')
    });

})