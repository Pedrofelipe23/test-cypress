import components from "../../support/elements/Components"
describe('BanCar - extrato', () => {

    beforeEach(() => {
        cy.visit('/pages/extrato')
        cy.login('matheusmws31@gmail.com', '12345678Ti@')
    }) 

    it('Accessing the extract page',() => {
        components.verifyTextExists('.text-heading-5','Extrato')
        cy.wait(2000)
    })

    it('Filtering statement by period',() => {
        components.clickButton('#periodFilter')
        components.verifyTextExists(':nth-child(4) > .periodFilter','Últimos 15 dias')
        components.clickButton(':nth-child(4) > .periodFilter')
        components.clickButton('#periodButtonApply')
        cy.wait(2000)
    })

})    