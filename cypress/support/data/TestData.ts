export class TestData {
    public static generateRandomUser() {
        return {
            username: `user_${Math.random().toString(36).substring(7)}`,
            password: `pass_${Math.random().toString(36).substring(7)}`
        };
    }

    public static getUserByRole(role: string) {
        const users = {
            admin: {
                username: 'Admin',
                password: 'admin123'
            },
            employee: {
                username: 'employee1',
                password: 'employee123'
            }
        };
        return users[role];
    }
} 