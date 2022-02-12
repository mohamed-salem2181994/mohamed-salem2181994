import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPasswordPage } from './forgetpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordPage,
  },
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPasswordPageRoutingModule {}
