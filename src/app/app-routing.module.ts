import { AuthGuard } from './login/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Splash', pathMatch: 'full' },
  {
    path: 'Splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule)
  },
  {
    path: 'login-home',
    loadChildren: () =>
      import('./login-home/home.module').then((m) => m.HomePageModule),canLoad:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'forgetpassword',
    loadChildren: () =>
      import('./forgetpassword/forgetpassword.module').then(
        (m) => m.ForgetPasswordPageModule
      ),
  },
  {
    path: 'Store',
    loadChildren: () =>
      import('./Store/Store.module').then((m) => m.StorePageModule),canLoad:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
