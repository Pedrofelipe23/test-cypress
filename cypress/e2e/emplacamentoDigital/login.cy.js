describe('login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login/')
      }) 
    
    it.only('only page',() => {
        cy.get('//*[@id="root"]/section/div/section/div/div[1]/div/h1').should('contain', 'Primeiro emplacamento digital') 
    })
    


})