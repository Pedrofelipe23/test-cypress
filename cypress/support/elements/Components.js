
class Components{

    constructor(){
    }

    clickButton(tagButton){
        cy.get(tagButton).click()
    }

    verifySwalMessage(message){
        cy.get('#swal2-content').should('contain', message)
    }

    clickButtonSwalConfirm(){
        cy.get('.swal2-confirm').click()
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

    clearInputText(tag){
        cy.get(tag).clear()
    }

    iframeContent(tagContent) {
        return cy.get('#content_iframe').then(($iframe) => {
          return cy.wrap($iframe.contents().find(tagContent));
        });
    }

    iframePageContent(tagContent,textContent){
        this.iframeContent(tagContent).should('contain',textContent)
    }

    interactInsideTheIframe(tagContent,text){
        this.iframeContent(tagContent).type(text)
    }

    clickOnFieldsInsideIframe(tagContent){
        this.iframeContent(tagContent).click()
    }

    selectValueWithinTheCombo(tagContent,tagSelect,value){
        this.iframeContent(tagContent).selectFieldValue(tagSelect,value)
    }


}

const components = new Components();
export default components;