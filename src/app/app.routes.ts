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
    path:"test",
    loadComponent: () => import('./contrat-diplome/components/contrat-diplome-page/contrat-diplome-page.component').then(c => c.ContratDiplomePageComponent)
  },
  {
    path:"type-contrat&diplome",
    loadComponent: () => import('./contrat-diplome/components/contrat-diplome-page/contrat-diplome-page.component').then(c => c.ContratDiplomePageComponent)
  },
  {
    path: "",
    component: LandingPageComponent
  },

];
