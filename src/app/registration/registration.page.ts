import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  email: string;
  role: string;
  userName: string;
  password: string;
  confirmPassword: string;
  constructor(
    public registrationService: RegistrationService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
  registUser() {
    this.registrationService
      .registUser(
        this.email,
        this.role,
        this.userName,
        this.password,
        this.confirmPassword
      )
      .subscribe((y) => {
        this.presentToast(y.error.message);
        console.log(y);
      });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
