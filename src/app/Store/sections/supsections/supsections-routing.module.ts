import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupsectionsPage } from './supsections.page';

const routes: Routes = [
  {
    path: '',
    component: SupsectionsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupsectionsPageRoutingModule {}
