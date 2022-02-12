import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helper.service';
import { RoleModel, UpdatedroleModel } from './role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient, public helperService: HelperService) {}
  getRole(): Observable<RoleModel> {
    return this.http.get<RoleModel>(this.helperService.baseUrl + `Role`);
  }
  addRole(
    rolrName: string,
    sectionID: number,
    totalpoints: number
  ): Observable<RoleModel> {
    return this.http.post<RoleModel>(this.helperService.baseUrl + 'Role', {
      sectionId: sectionID,
      role_Name: rolrName,
      total_Points: totalpoints,
    });
  }
  deletedRole(id: number): Observable<any> {
    return this.http.delete<any>(
      this.helperService.baseUrl + 'Role/' + 'Role?id=' + id,
      {
        body: { id },
      }
    );
  }
  updateRole(rolrName: string, roleID: number,sectionID: number): Observable<UpdatedroleModel> {
    return this.http.put<UpdatedroleModel>(
      this.helperService.baseUrl + 'Role/' +  roleID,
      {
        role_Name: rolrName,
        id: roleID,
        sectionId: sectionID,
      }
    );
  }
}
