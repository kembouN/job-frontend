import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/components/landing-page/landing-page.component';
import { authGuard } from './guards/auth.guard';

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
    loadComponent: () => import('./contrat-diplome/components/contrat-diplome-page/contrat-diplome-page.component').then(c => c.ContratDiplomePageComponent),
    canActivate: [authGuard]
  },
  {
    path:"type-contrat-et-diplome",
    loadComponent: () => import('./contrat-diplome/components/contrat-diplome-page/contrat-diplome-page.component').then(c => c.ContratDiplomePageComponent),
    // canActivate: [authGuard]
  },
  {
    path: "",
    component: LandingPageComponent
  },

];
