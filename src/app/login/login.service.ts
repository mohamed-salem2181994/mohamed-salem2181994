import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private storage: Storage)
 {}
 get userIsAuthenticated() {
  return this.storage.get('userAttributes').then(token=>{

    if (token) {
      if (token==='') { return false; } else {
        return true;
      }
    }else{
      return false;
    }
  });
}
  logInUser(userName: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(
      `http://piapi.raneen.com.eg/api/Account/authenticate`,
      {
        userName,
        password,
      }
    );
  }
  autoLogout(){
      return null;
  }
}
