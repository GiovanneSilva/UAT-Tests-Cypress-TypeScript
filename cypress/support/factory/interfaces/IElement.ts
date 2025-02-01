/// <reference types="cypress" />

export interface IElement {
    get(): Cypress.Chainable<JQuery<HTMLElement>>;
    click(): void;
    type(text: string): void;
    should(assertion: string, value?: string): void;
} 