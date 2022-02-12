import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helper.service';
import { SuproleModel, UpdatedsuproleModel } from './suprole.model';

@Injectable({
  providedIn: 'root',
})
export class SuproleService {
  constructor(private http: HttpClient, public helperService: HelperService) { }
  getsupRole(roleID: number): Observable<SuproleModel> {
    return this.http.get<SuproleModel>(this.helperService.baseUrl + `SubRole/GetByRoleID/` + roleID);
  }
  addsupRole(
    roleID: number,
    suproledes: string,
    totalpoints: number,
    Isfinance: boolean
  ): Observable<SuproleModel> {
    debugger  
    return this.http.post<SuproleModel>(
      this.helperService.baseUrl + 'SubRole',
      {
        parentRoleId: roleID,
        subRole_Description: suproledes,
        total_Points: totalpoints,
        isFinance: Isfinance,
      }
    );
  }
  deletedsupRole(id: number): Observable<any> {
    return this.http.delete<any>(
      this.helperService.baseUrl + 'SubRole/' + 'SubRole?id=' + id,
      {
        body: { id },
      }
    );
  }
  updatesupRole(
    suproledes: string,
    suproleID: number,
    roleID: number
  ): Observable<UpdatedsuproleModel> {
    return this.http.put<UpdatedsuproleModel>(
      this.helperService.baseUrl + 'SubRole/' + suproleID,
      {
        subRole_Description: suproledes,
        id: suproleID,
        roleId: roleID,
      }
    );
  }
}
