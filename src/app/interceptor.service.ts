import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { Observable, from } from 'rxjs';
import { throwError } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private alertController: AlertController,
    private storage: Storage, private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.storage.get('userAttributes')).pipe(
      switchMap((token) => {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token),
        });
        request = request.clone({
          headers: request.headers.set('Content-Type', 'application/json'),
        });
        request = request.clone({ url: request.url });
        return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do nothing for now
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            const status = error.status;
            const reason =
              error && error.error.reason ? error.error.reason : '';
                if(status===500){
                  this.storage.remove('userAttributes');
                  this.router.navigate(['login']);
                }else if(status===400 ||status===401){
                  this.router.navigate(['login']);
                }
                else{this.presentAlert(status, reason);}
            return throwError(error);
          })
        );
      })
    );
  }

  async presentAlert(status, reason) {
    const alert = await this.alertController.create({
      header: status + ' Error',
      subHeader: 'Subtitle',
      message: reason,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
