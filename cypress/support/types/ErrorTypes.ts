/**
 * TODO: Implementar futuramente para melhor tipagem de erros
 * 
 * Este enum será usado para:
 * 1. Tipar as mensagens de erro de forma mais segura
 * 2. Centralizar todos os tipos de erro possíveis
 * 3. Facilitar a manutenção e evitar strings duplicadas
 * 
 * Exemplo de uso futuro:
 * loginPage.verifyErrorMessage(ErrorType.REQUIRED_USERNAME);
 * 
 * Necessário refatorar:
 * - LoginPage.ts: atualizar método verifyErrorMessage
 * - messages.json: alinhar as chaves com este enum
 * - login.spec.ts: atualizar as chamadas de verificação de erro
 */
export enum ErrorType {
    INVALID_CREDENTIALS = 'invalidCredentials',
    REQUIRED_USERNAME = 'requiredUsername',
    REQUIRED_PASSWORD = 'requiredPassword'
} 