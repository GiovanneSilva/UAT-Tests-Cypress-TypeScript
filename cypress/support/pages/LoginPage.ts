import { BasePage } from './BasePage';
import { Button } from '../factory/elements/Button';
import { Input } from '../factory/elements/Input';
import { LoginElements } from '../elements/LoginElements';

export class LoginPage extends BasePage {
    private usernameInput: Input;
    private passwordInput: Input;
    private loginButton: Button;

    constructor() {
        super();
        this.usernameInput = this.createInput(LoginElements.usernameInput);
        this.passwordInput = this.createInput(LoginElements.passwordInput);
        this.loginButton = this.createButton(LoginElements.loginButton);
    }

    public visit(): void {
        cy.visit('/web/index.php/auth/login');
    }

    public login(username: string, password: string, clearBeforeSubmit: boolean = false): void {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        
        if (clearBeforeSubmit) {
            this.clearFields();
        }
        
        this.loginButton.click();
    }

    public clearFields(): void {
        cy.clearLoginFields();
    }

    public verifyErrorMessage(message: string, selector: string = LoginElements.errorMessage): void {
        cy.get(selector).should('contain.text', message);
    }
} 