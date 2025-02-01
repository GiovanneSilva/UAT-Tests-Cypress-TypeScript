/// <reference types="cypress" />
import { IElement } from './interfaces/IElement';

export abstract class BaseElement implements IElement {
    // Seletor CSS protegido que pode ser acessado por classes filhas
    protected selector: string;

    // Construtor que recebe o seletor
    constructor(selector: string) {
        this.selector = selector;
    }

    // Retorna o elemento do Cypress
    public get(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selector);
    }

    // Clica no elemento
    public click(): void {
        this.get().click();
    }

    // Digita texto no elemento
    public type(text: string): void {
        this.get().type(text);
    }

    // Faz asserções no elemento
    public should(assertion: string, value?: string): void {
        this.get().should(assertion, value);
    }
} 