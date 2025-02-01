import { LoginPage } from '../support/pages/LoginPage';
import { IUsers } from '../support/types/UserTypes';
import { TestData } from '../support/data/TestData';
import { LoginElements } from '../support/elements/LoginElements';

describe('Login Tests', () => {
    const loginPage = new LoginPage();
    
    let users: IUsers;
    let messages: any;

    before(() => {
        cy.fixture('users').then((userData: IUsers) => {
            users = userData;
        });
        cy.fixture('messages').then((messageData) => {
            messages = messageData;
        });
    });

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login successfully with valid credentials', () => {
        cy.log('Attempting to login with valid credentials');
        loginPage.login(users.admin.username, users.admin.password);
        cy.url().should('include', messages.success.loginSuccess);
        cy.log('Login successful with valid credentials');
    });

    it('should show error with invalid credentials', () => {
        cy.log('Attempting to login with invalid credentials');
        loginPage.login(users.invalid.username, users.invalid.password);
        loginPage.verifyErrorMessage(
            messages.errors.invalidCredentials, 
            LoginElements.errorMessage
        );
        cy.log('Error message displayed for invalid credentials');
    });

    it('should login successfully with dynamic user', () => {
        const dynamicUser = TestData.generateRandomUser();
        cy.log(`Attempting to login with dynamic user: ${dynamicUser.username}`);
        loginPage.login(dynamicUser.username, dynamicUser.password);
        cy.log('Login successful with dynamic user');
    });

    it('should login as specific role', () => {
        const adminUser = TestData.getUserByRole('admin');
        cy.log(`Attempting to login as admin user: ${adminUser.username}`);
        loginPage.login(adminUser.username, adminUser.password);
        cy.log('Login successful as admin user');
    });

    it('should show required field messages', () => {
        cy.log('Attempting to login with empty username and password');
        loginPage.login('inputAutoDelete', 'inputAutoDelete', true);
        loginPage.verifyErrorMessage(
            messages.errors.requiredUsername,
            LoginElements.errorMessageRequiredUsername
        );
        cy.log('Required field error message displayed');
    });
}); 