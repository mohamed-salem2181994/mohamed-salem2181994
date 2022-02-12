import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuprolePageRoutingModule } from './suprole-routing.module';

import { SuprolePage } from './suprole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuprolePageRoutingModule,
  ],
  declarations: [SuprolePage]
})
export class SuprolePageModule {}
