import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Supsectionslistmodel, SupsectionsModel } from './supsections.model';
import { SupsectionsService } from './supsections.service';

@Component({
  selector: 'app-supsections',
  templateUrl: './supsections.page.html',
  styleUrls: ['./supsections.page.scss'],
})
export class SupsectionsPage {
  sectionID: number;
  subsectionlist: Supsectionslistmodel[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public supsectionsService: SupsectionsService,
    public toastController: ToastController,
    public alertCtrl: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.sectionId) {
        this.sectionID = params.sectionId;
        this.getsubsectionlist();
        console.log(JSON.parse(params.sectionId));
      }
    });
  }

  getsubsectionlist() {
    this.supsectionsService
      .getsubSection(this.sectionID)
      .subscribe((result) => {
        if (result.succeeded) {
          console.log(result);
          this.subsectionlist = result.data;
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
            console.log(value['0']);
            this.supsectionsService
              .addsubSection(value['0'], this.sectionID)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.getsubsectionlist();
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
  async updatesubSection(item: Supsectionslistmodel) {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: item.subSection_Description,
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
            this.supsectionsService
              .updatesubSection(value['0'], item.id)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.getsubsectionlist();
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
  async deletesubSection(id: number) {
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
            this.supsectionsService
              .deletedsubSection(id)
              .subscribe((result) => {
                if (result.succeeded) {
                  console.log(result);
                  this.getsubsectionlist();
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
