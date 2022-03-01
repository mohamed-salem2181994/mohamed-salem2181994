import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModel, UpdatedStoreModel } from './Store.model';
import { HelperService } from '../helper.service';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient, public helperService: HelperService) { }
  getStores(): Observable<StoreModel> {
    return this.http.get<StoreModel>(this.helperService.baseUrl + `Store`);
  }
  addStores(storeName: string): Observable<StoreModel> {
    return this.http.post<StoreModel>(this.helperService.baseUrl + 'Store', {
      store_Name: storeName,
    });
  }
  deletedStores(storeId: number): Observable<UpdatedStoreModel> {
    return this.http.delete<UpdatedStoreModel>(
      this.helperService.baseUrl + 'Store?id=' + storeId
    );
  }
  generateStore(storeId: number): Observable<UpdatedStoreModel> {
    return this.http.post<UpdatedStoreModel>(
      this.helperService.baseUrl + 'Evaluation',
      {
        storeID: storeId
      }
    );
  }

  updateStores(
    storeName: string,
    storeId: number
  ): Observable<UpdatedStoreModel> {
    return this.http.put<UpdatedStoreModel>(
      this.helperService.baseUrl + 'Store',
      {
        id: storeId,
        store_Name: storeName,
      }
    );
  }
}
