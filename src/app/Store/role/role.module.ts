import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolePageRoutingModule } from './role-routing.module';
import { RolePage } from './role.page';
import { SuprolePageModule } from './suprole/suprole.module';
import { AddRolePageModule } from './add-role/add-role.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolePageRoutingModule,
    SuprolePageModule,
    AddRolePageModule
  ],
  declarations: [RolePage],
})
export class RolePageModule {}
