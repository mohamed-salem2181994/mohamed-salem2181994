import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;
  constructor(
    private storage: Storage,
    public loginService: LoginService,
    public toastController: ToastController,
    public router: Router
  ) {}
  ngOnInit() {

  }
  logInUser() {

    try {
      this.loginService
        .logInUser(this.userName, this.password)
        .subscribe((results) => {
          if (results.succeeded === false) {
            const toast = this.toastController.create({
              message: 'Invalid Credentials for  ' + this.userName,
              duration: 1000,
              color: 'danger',
              cssClass: 'toast-button',
            });
            console.log(results.succeeded);
          } else if (results.succeeded === true) {
            this.storage.create();

            this.storage.set('userAttributes', results.data.jwToken);
            const toast = this.toastController.create({
              message: 'welcome  ' + this.userName,
              color: 'danger',
              duration: 1000,
            });
            this.router.navigateByUrl('login-home');
            console.log(results.succeeded);
          }
        });
    } catch (error) {
      console.log('caught rethrown error, providing fallback value');
    }
  }
}
