
class components{

    clickButton(tagButton){
        cy.get(tagButton).click()
    }

    verifySwalMessage(message){
        cy.get('#swal2-content').should('contain', message)
    }

    verifyTextExists(tag,text){
        cy.get(tag).should('contain',text)
    }

    verifyTagNotBeDisable(tag){
        cy.get(tag).should('not.be.disabled')
    }

    checkHaveThisValue(tag,text){
        cy.get(tag).should('have.value',text)
    }

    selectFieldValue(tag,value){
        cy.get(tag).then(($select) => {
            cy.wrap($select).select(value, { force: true });
        });
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
export default new components();