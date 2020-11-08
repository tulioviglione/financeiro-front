export class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _username: string;

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public get username(): string {
        return this._username;
    }

    public set id(id: number) {
        this._id = id;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set email(email: string) {
        this._email = email;
    }

    public set username(username: string) {
        this._username = username;
    }
}