import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePage } from './StorePage';

const routes: Routes = [
  {
    path: '',
    component: StorePage,
  },
  {
    path: 'role',
    loadChildren: () =>
      import('./role/role.module').then((m) => m.RolePageModule),
  },
  {
    path: 'sections',
    loadChildren: () =>
      import('./sections/sections.module').then((m) => m.SectionsPageModule),
  },
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
