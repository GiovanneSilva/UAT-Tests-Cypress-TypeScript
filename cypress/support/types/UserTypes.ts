export interface IUser {
    username: string;
    password: string;
}

export interface IUsers {
    admin: IUser;
    invalid: IUser;
    employee: IUser;
} 