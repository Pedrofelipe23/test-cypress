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

    clickButton(tagButton){
        cy.get(tagButton).click();
    }

    verifySwalMessage(message){
        cy.get('#swal2-content').should('contain', message)
    }

    verifyTextExists(tag,text){
        cy.get(tag).should('contain',text)
    }

    inputText(tag,text){
        cy.get(tag).type(text)
    }

    iframePage(tagContent,textContent){
        cy.get('#content_iframe') // lidando com iframe na pagina
            .then(($iframe) => {
                const iframeContent = $iframe.contents().find(tagContent)

                cy.wrap(iframeContent)
                    .should('contain',textContent)
        })
    }

}

export default new login();