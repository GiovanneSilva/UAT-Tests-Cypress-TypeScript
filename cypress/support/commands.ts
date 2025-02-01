/// <reference types="cypress" />

// Aqui você pode adicionar comandos customizados ao Cypress
// Por exemplo:
// Cypress.Commands.add('login', (email, password) => { ... })

// Comando para limpar campos de login
Cypress.Commands.add('clearLoginFields', () => {
    cy.get('input[name="username"]').clear();
    cy.get('input[type="password"]').clear();
});

declare global {
    namespace Cypress {
        interface Chainable {
            // Declare aqui os tipos dos seus comandos customizados
            // login(email: string, password: string): Chainable<void>
            clearLoginFields(): Chainable<void>;
        }
    }
}

export {}; 