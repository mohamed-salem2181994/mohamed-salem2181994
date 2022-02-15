import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Sectionlistmodel } from '../../sections/sections.model';
import { SectionsService } from '../../sections/sections.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.page.html',
  styleUrls: ['./add-role.page.scss'],
})
export class AddRolePage implements OnInit {
  sections: Sectionlistmodel[];
  rolrName: string;
  sectionID: number;
  totalpoints: number;
  constructor(public modalCtrl: ModalController, public sectionsService: SectionsService, public roleService: RoleService, public toastController: ToastController,) {
    this.sectionlist();
  }
  ngOnInit() { }
  dismiss() {
    this.modalCtrl.dismiss();
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
  addRoles() {
    this.roleService
      .addRole(this.rolrName, this.sectionID, this.totalpoints)
      .subscribe((result) => {
        console.log(this.rolrName+"-"+ this.sectionID+"-"+ this.totalpoints)
        if (result.succeeded) {
          this.dismiss();
          const toast = this.toastController.create({
            message: 'تم الحفظ بنجاح',
            color: 'success',
            duration: 1000,
          });
        } else {
        }
      });
  }
}
