import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupsectionsPageRoutingModule } from './supsections-routing.module';

import { SupsectionsPage } from './supsections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupsectionsPageRoutingModule
  ],
  declarations: [SupsectionsPage]
})
export class SupsectionsPageModule {}
