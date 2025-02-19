import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/components/landing-page/landing-page.component';

export const routes: Routes = [

  {
    path: "login",
    loadComponent: () => import('./account/component/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import('./account/component/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: "",
    component: LandingPageComponent
  },

];
