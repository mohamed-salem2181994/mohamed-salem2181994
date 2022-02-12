export class SupsectionsModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: Supsectionslistmodel[]
  ) {}
}
export class Supsectionslistmodel {
  constructor(
    public id: number,
    public subSection_Description: string
  ) {}
}
export class UpdatedSupsectionsModel {
  constructor(
    public succeeded: boolean,
    public message: string,
    public errors: [],
    public data: number,
  ) {}
}
