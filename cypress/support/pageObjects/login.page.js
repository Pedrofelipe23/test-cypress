//const elements = require('../elements/login.elements').ELEMENTS

class login{

    fillUsername(username){
        cy.get('#j_username').type(username)
    }

    fillPassword(password){
        cy.get('#j_password').type(password)
    }

    clickLoginButton(){
        cy.get('#entrar').click();
    }

    

}

export default new login();