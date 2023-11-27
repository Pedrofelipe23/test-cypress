describe('atendimentoSuporteFenox', () => {

    beforeEach(() => {
        cy.visit('https://esfenox.solutionsa.com.br/fenox/')
        cy.get('label').should('contain', 'Nome de usuário (login)') // assert
        cy.login('caique.pincerno', 'pincerno@2023')
        cy.visit('https://esfenox.solutionsa.com.br/fenox/suporte/atendimentoSuporteFenox')
      }) 
    
    it('consultando placa no input de pesquisa', () => {
        cy.get('.label-search').should('contain', 'Pesquisar') //assert
        cy.get('#searchSuporte').type('PPG1F09')
        cy.get('#searchButton').click()

        cy.get('#selectAtendFenox').select('PPG1F09 - 27/11/2023 08:51:07')
        cy.get('#selectAtendFenox').should('contain', 'PPG1F09 - 27/11/2023 08:51:07') //assert
    })

    it('Validando informações da vistoria pesquisada', () => {
        cy.get('#searchSuporte').type('MFF4J68')
        cy.get('#searchButton').click()

        cy.get('#numLaudo').should('be.visible','48488849-15b9-4b04-9e59-ef47b21d2442') //assert
        cy.get('#placa').should('be.visible','MFF4J68') //assert
        cy.get('#chassi').should('be.visible','9C2MD34008R002751') //assert
        cy.get('#loja_nome').should('be.visible','B & C VISTORIAS LTDA') //assert
        cy.get('#nomeProprietario').should('be.visible','HENRIQUE JOSE BRESSANELLI SARTORI') //assert
        cy.get('#lastModifiedById').should('be.visible','userb') //assert
    })

    it('Visualizando fotos do processo IA',() => {
        cy.get('#searchSuporte').type('RQM7F43')
        cy.get('#searchButton').click()

        cy.get('[data-id="fotosProcesso"]').should('be.visible','Fotos Processo')
        cy.get('[data-id="fotosProcesso"]').click(), {force: true}

        cy.get('#fotos1 > h3').should('be.visible','Fotos Vistoria')
        cy.get('#fotosProcesso').scrollTo('bottom')
    })

})