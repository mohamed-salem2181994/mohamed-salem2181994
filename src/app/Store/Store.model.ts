export class StoreModel {
  constructor(
    public  succeeded: boolean,
    public  message: string,
    public  errors: [],
    public  data: Storelistmodel[],
  ) {}
}
export class Storelistmodel{
  constructor(
    public id: number,
    public store_Name: string,
  ){}
}
export class UpdatedStoreModel {
  constructor(
    public  succeeded: boolean,
    public  message: string,
    public  errors: [],
    public  data: number,
  ) {}
}
