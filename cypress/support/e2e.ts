/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';
import './commands';

Cypress.on('test:before:run', (test) => {
    test.title = test.title.replace(/\"/g, '\'');
});

declare global {
    namespace Cypress {
        interface Chainable {
        }
    }
}

export {}; 