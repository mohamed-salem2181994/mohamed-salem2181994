import { Component } from '@angular/core';
import { Sectionlistmodel } from './sections.model';
import { AlertController, ToastController } from '@ionic/angular';
import { SectionsService } from './sections.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.page.html',
  styleUrls: ['./sections.page.scss'],
})
export class SectionsPage {
  sections: Sectionlistmodel[];
  constructor(
    public sectionsService: SectionsService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router
  ) {
    this.sectionlist();
  }

  sectionlist() {
    this.sectionsService.getSection().subscribe((result) => {
      if (result.succeeded) {
        console.log(result);
        this.sections = result.data;
      } else {
        console.log(result);
      }
    });
  }
  openSubSections(sectionId: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        sectionId: JSON.stringify(sectionId),
      },
    };
    this.router.navigate(['supsections'], navigationExtras);
  }
  async add() {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: 'ادخل اسم القسم',
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
            this.sectionsService.addSection(value['0']).subscribe((result) => {
              if (result.succeeded) {
                this.sectionlist();
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
  async updateSection(item: Sectionlistmodel) {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          placeholder: item.section_Name,
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
            this.sectionsService
              .updateSection(value['0'], item.id)
              .subscribe((result) => {
                if (result.succeeded) {
                  this.sectionlist();
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
  async deleteSection(id: number) {
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
            this.sectionsService.deletedSection(id).subscribe((result) => {
              if (result.succeeded) {
                console.log(result);
                this.sectionlist();
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
