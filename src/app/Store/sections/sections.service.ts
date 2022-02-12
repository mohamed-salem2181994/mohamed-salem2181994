import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helper.service';
import { SectionModel, UpdatedSectionModel } from './sections.model';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  constructor(private http: HttpClient, public helperService: HelperService) {}
  getSection(): Observable<SectionModel> {
    return this.http.get<SectionModel>(this.helperService.baseUrl + `Section`);
  }
  addSection(sectionName: string): Observable<SectionModel> {
    return this.http.post<SectionModel>(
      this.helperService.baseUrl + 'Section',
      {
        section_Name: sectionName,
      }
    );
  }
  deletedSection(sectionId: number): Observable<any> {
    return this.http.delete<any>(
      this.helperService.baseUrl + 'Section/' + sectionId,
      {
        body: { id: sectionId },
      }
    );
  }
  updateSection(
    sectionName: string,
    sectionId: number
  ): Observable<UpdatedSectionModel> {
    return this.http.put<UpdatedSectionModel>(
      this.helperService.baseUrl + 'Section/' + sectionId,
      {
        id: sectionId,
        section_Name: sectionName,
      }
    );
  }
}
