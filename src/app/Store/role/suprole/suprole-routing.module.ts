import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuprolePage } from './suprole.page';

const routes: Routes = [
  {
    path: '',
    component: SuprolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuprolePageRoutingModule {}
