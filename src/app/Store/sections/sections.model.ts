export class SectionModel {
  constructor(
    public  succeeded: boolean,
    public  message: string,
    public  errors: [],
    public  data: Sectionlistmodel[],
  ) {}
}
export class Sectionlistmodel{
  constructor(
    public id: number,
    public section_Name: string,
  ){}
}
export class UpdatedSectionModel {
  constructor(
    public  succeeded: boolean,
    public  message: string,
    public  errors: [],
    public  data: number,
  ) {}
}
