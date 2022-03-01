import { StoreService } from './store.service';
import { Component } from '@angular/core';
import { Storelistmodel } from './Store.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './Store.page.html',
  styleUrls: ['./Store.page.scss'],
})
export class StorePage {
  stores: Storelistmodel[];
  constructor(
    public storeService: StoreService,
    public toastController: ToastController,
    public alertCtrl: AlertController
  ) {
    this.storelist();
  }

  storelist() {
    this.storeService.getStores().subscribe((result) => {
      if (result.succeeded) {
        console.log(result);
        this.stores = result.data;
      } else {
        console.log(result);
      }
    });
  }

  async add() {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: 'ادخل اسم الفرع',
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
            this.storeService.addStores(value['0']).subscribe((result) => {
              if (result.succeeded) {
                this.storelist();
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
  async updateStore(item: Storelistmodel) {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: item.store_Name,
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
            this.storeService.updateStores(value['0'],item.id).subscribe((result) => {
              if (result.succeeded) {
                this.storelist();
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
  async deleteStore(id: number) {
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
            this.storeService.deletedStores(id).subscribe((result) => {
              if (result.succeeded) {
                console.log(result);
                this.storelist();
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
  async  generateStore(id: number) {
    debugger
    const alert = this.alertCtrl.create({
      message: 'هل تريد تقييم هذا العنصر ؟',
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'تقييم',
          handler: () => {
            this.storeService.generateStore(id).subscribe((result) => {
              debugger
              if (result.succeeded) {
                console.log(result);
                this.storelist();
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
