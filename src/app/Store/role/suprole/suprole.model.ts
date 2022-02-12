export class SuproleModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: Suprolelistmodel[]
  ) {}
}
export class Suprolelistmodel {
  constructor(
    public id: number,
    public subRole_Description: string,
    public parentRoleId: number,
    public total_Points: number,
    public isFinance: boolean
  ) {}
}
export class UpdatedsuproleModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: number
  ) {}
}
