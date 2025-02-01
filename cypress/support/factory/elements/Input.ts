/// <reference types="cypress" />
import { BaseElement } from '../BaseElement';

export class Input extends BaseElement {
    constructor(selector: string) {
        super(selector);
    }

    public clear(): void {
        this.get().clear();
    }

    public getValue(): Cypress.Chainable<string> {
        return this.get().invoke('val');
    }
} 