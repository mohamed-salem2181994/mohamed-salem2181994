import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgetPasswordPageModule } from './forgetpassword/forgetpassword.module';
import { HomePageModule } from './login-home/home.module';
import { RegistrationPageModule } from './registration/registration.module';
import { StorePageModule } from './Store/Store.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AddRolePageModule } from './Store/role/add-role/add-role.module';
import { RolePageModule } from './Store/role/role.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ForgetPasswordPageModule,
    HomePageModule,
    RegistrationPageModule,
    HttpClientModule,
    StorePageModule,
    FormsModule, // add the forms module
    AddRolePageModule,
    RolePageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FormsModule,
    IonicModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
