import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { LoginService } from './login.service';
import { take, tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private logInService: LoginService, private router: Router  ) {}

  canLoad( route: Route,
           segments: UrlSegment[]
    ): Observable<boolean>|Promise<boolean>|boolean {
       return this.logInService.userIsAuthenticated.then(token=>{
        if (token) {
          if (token) { return true; } else {
            this.router.navigate(['login']);
          }
        }else{this.router.navigate(['login']);}
       });

    }
}
