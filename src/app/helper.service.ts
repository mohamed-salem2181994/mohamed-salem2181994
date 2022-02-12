import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public baseUrl= 'http://piapi.raneen.com.eg/api/v1/';
  constructor() {}
}
