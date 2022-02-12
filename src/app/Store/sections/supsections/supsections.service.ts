import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helper.service';
import { SupsectionsModel, UpdatedSupsectionsModel } from './supsections.model';

@Injectable({
  providedIn: 'root',
})
export class SupsectionsService {
  constructor(private http: HttpClient, public helperService: HelperService) {}
  getsubSection(sectionID: number): Observable<SupsectionsModel> {
    return this.http.get<SupsectionsModel>(
      this.helperService.baseUrl + `SubSection/GetBySectionID/` + sectionID
    );
  }
  addsubSection(
    subsectionDes: string,
    sectionId: number
  ): Observable<SupsectionsModel> {
    return this.http.post<SupsectionsModel>(
      this.helperService.baseUrl + 'SubSection',
      {
        sectionID: sectionId,
        subSection_Description: subsectionDes,
      }
    );
  }
  deletedsubSection(id: number): Observable<any> {
    console.log(id);
    return this.http.delete<any>(
      this.helperService.baseUrl + 'SubSection/' + id,
      {
        body: { id },
      }
    );
  }
  updatesubSection(
    subsectionDes: string,
    susectionid: number
  ): Observable<UpdatedSupsectionsModel> {
    return this.http.put<UpdatedSupsectionsModel>(
      this.helperService.baseUrl + 'SubSection/' + susectionid,
      {
        id: susectionid,
        subSection_Description: subsectionDes,
      }
    );
  }
}
