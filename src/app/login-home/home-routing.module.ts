import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
