export class UserModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public error: any,
    public errors: [],
    public data: UserDetails
  ) {}
}

export class UserDetails {
  constructor(
    public id: number,
    public userName: string,
    public email: string,
    public roles: [],
    public isVerified: boolean,
    public jWToken: string
  ) {}
}
