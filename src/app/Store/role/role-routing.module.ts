import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolePage } from './role.page';

const routes: Routes = [
  {
    path: '',
    component: RolePage,
  },
  {
    path: 'suprole',
    loadChildren: () => import('./suprole/suprole.module').then( m => m.SuprolePageModule)
  },
  {
    path: 'add-role',
    loadChildren: () => import('./add-role/add-role.module').then( m => m.AddRolePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolePageRoutingModule {}
