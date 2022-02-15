
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { SuproleModel, Suprolelistmodel } from './suprole.model';
import { SuproleService } from './suprole.service';


@Component({
  selector: 'app-suprole',
  templateUrl: './suprole.page.html',
  styleUrls: ['./suprole.page.scss'],
})
export class SuprolePage {
  roleID: number;
  suproleslist: Suprolelistmodel[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public suproleService: SuproleService,
    public toastController: ToastController,
    public alertCtrl: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.roleID) {
        this.roleID = params.roleID;
        this.getsuprolelist();
        console.log(JSON.parse(params.roleID));
      }
    });
  }

  getsuprolelist() {
    this.suproleService
      .getsupRole(this.roleID)
      .subscribe((result) => {
        if (result.succeeded) {
          console.log(result);
          this.suproleslist = result.data;
        } else {
          console.log(result);
        }
      });
  }
  async add() {
    const alert = await this.alertCtrl.create({

      inputs: [
        {
          placeholder: 'ادخل اسم القسم الفرعى ',
          type: 'text',
          label: 'بند مالى',
        },
        {
          placeholder: 'ادخل التقييم',
          type: 'text',
          label: 'بند مالى',
        },
        {
          name: 'agree',
          type: 'checkbox',
          label: 'بند مالى',
          cssClass: 'modal-checkbox',
        },
      ],

      buttons: [
        {
          text: 'اغلاق',
          role: 'cancel',
        },
        {
          text: 'اضافة',
          handler: (value) => {
            let isfinance = value['agree']=='on'? true: false;
            console.log(value['0']);
            this.suproleService
              .addsupRole(this.roleID, value['0'], value['1'], isfinance)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.getsuprolelist();
                } else {
                  console.log(result);
                }
              });
          },
        },
      ],
    });
    alert.present();
  }
  async updatesuprole(item: any, roleID: number) {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: item.itemSection_Name,
        },
      ],
      buttons: [
        {
          text: 'اغلاق',
          role: 'cancel',
        },
        {
          text: 'تعديل',
          handler: (value) => {
            console.log(value['0']);
            this.suproleService
              .updatesupRole(value['0'], item, roleID)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.getsuprolelist();
                } else {
                  console.log(result);
                }
              });
          },
        },
      ],
    });
    alert.present();
  }
  async deletesuprole(id: number) {
    const alert = this.alertCtrl.create({
      message: 'هل تريد حذف هذا العنصر ؟',
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'حذف',
          handler: () => {
            this.suproleService
              .deletedsupRole(id)
              .subscribe((result) => {
                if (result.succeeded) {
                  console.log(result);
                  this.getsuprolelist();
                } else {
                  console.log(result);
                }
              });
          },
        },
      ],
    });
    (await alert).present();
  }
}
