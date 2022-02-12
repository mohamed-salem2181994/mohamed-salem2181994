import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './Store-routing.module';
import { StorePage } from './StorePage';
import { SuprolePageModule } from './role/suprole/suprole.module';
import { SectionsPageModule } from './sections/sections.module';
import { InterceptorService } from '../interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    IonicStorageModule.forRoot(),
    SuprolePageModule,
    SectionsPageModule,
    IonicStorageModule,
  ],
  declarations: [StorePage],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
})
export class StorePageModule {}
