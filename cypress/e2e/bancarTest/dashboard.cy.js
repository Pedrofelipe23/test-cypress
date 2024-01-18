import Components from "../../support/elements/Components"
import login from "../../support/pageObjects/login.page"

describe('BanCar - dashboard', () => {

    beforeEach(() => {
        cy.visit('/login/auth')
      }) 

    it('Entering the dashboard page',() => {
        cy.login('matheus123@gmail.com','12345678Ti@')
        Components.iframePage('.pb-10','Seja bem-vindo ao seu Dashboard.')
    })

    

})    