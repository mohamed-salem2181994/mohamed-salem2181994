export class RoleModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: Rolelistmodel[]
  ) {}
}
export class Rolelistmodel {
  constructor(
    public id: number,
    public role_Name: string,
    public total_Points: number,
    public sectionID: number,
  ) {}
}
export class UpdatedroleModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: number,
  ) {}
}
