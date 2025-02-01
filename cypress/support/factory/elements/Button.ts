/// <reference types="cypress" />
import { BaseElement } from '../BaseElement';

export class Button extends BaseElement {
    constructor(selector: string) {
        super(selector);
    }

    public isDisabled(): Cypress.Chainable<boolean> {
        return this.get().then($button => {
            return $button.prop('disabled');
        });
    }
} 