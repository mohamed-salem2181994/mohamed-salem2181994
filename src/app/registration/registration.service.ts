import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from './Users.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  registUser(
    email: string,
    role: string,
    userName: string,
    password: string,
    confirmPassword: string
  ): Observable<UserModel> {
    return this.http.post<UserModel>(
      'http://piapi.raneen.com.eg/api/Account/register',
      {
        email,
        role,
        userName,
        password,
        confirmPassword,
      }
    );
  }
}
