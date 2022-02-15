import { Component } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { RoleService } from './role.service';
import { Rolelistmodel } from './role.model';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AddRolePage } from './add-role/add-role.page';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage {
  rolrName: string;
  sectionID: number;
  totalpoints: number;
  roles: Rolelistmodel[];
  constructor(
    private route: ActivatedRoute,
    public roleService: RoleService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public modalCtrl: ModalController
  ) {
    this.getRolelist();
    this.route.queryParams.subscribe((params) => {
      if (params && params.sectionId) {
        this.sectionID = params.sectionId;
        this.getRolelist();
        console.log(JSON.parse(params.sectionId));
      }
    });
  }
  openSuprole(roleID: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        roleID: JSON.stringify(roleID),
      },
    };
    this.router.navigate(['suprole'], navigationExtras);
  }
  async showModal() {
    let modal = await this.modalCtrl.create({
      component: AddRolePage,
    });
    modal.onDidDismiss().then(data => {
      this.getRolelist();
    });
    return await modal.present();
  }
  getRolelist() {
    this.roleService.getRole().subscribe((result) => {
      if (result.succeeded) {
        this.roles = result.data;
      } else {
      }
    });
  }


  async updaterole(item: any, sectionID: number) {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: item.role_Name,
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
            this.roleService
              .updateRole(value['0'], item, sectionID)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.getRolelist();
                } else {
                }
              });
          },
        },
      ],
    });
    alert.present();
  }
  async deleterole(id: number) {
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
            this.roleService.deletedRole(id).subscribe((result) => {
              if (result.succeeded) {
                this.getRolelist();
              } else {
              }
            });
          },
        },
      ],
    });
    (await alert).present();
  }

}
