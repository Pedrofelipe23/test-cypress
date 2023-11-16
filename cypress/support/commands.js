// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

    Cypress.Commands.add('login', (username, password) => {
        cy.get('#j_username').type(username,{force: true});
        cy.get('#j_password').type(password,{force: true});
        cy.get('#j_username').should('have.value', username); // assert
        cy.get('#j_password').should('have.value', password); // assert
        cy.get('form').submit();
    })
