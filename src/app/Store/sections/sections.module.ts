import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionsPageRoutingModule } from './sections-routing.module';

import { SectionsPage } from './sections.page';
import { SupsectionsPageModule } from './supsections/supsections.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionsPageRoutingModule,
    SupsectionsPageModule
  ],
  declarations: [SectionsPage]
})
export class SectionsPageModule {}
