import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/components/landing-page/landing-page.component';
import { LoginComponent } from './account/component/login/login.component';
import { RegisterComponent } from './account/component/register/register.component';
import { JobDetailsComponent } from './job/components/job-details/job-details.component';

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
    path: "job-details",
    loadComponent: () => import('./job/components/job-details/job-details.component').then(c => c.JobDetailsComponent)
  },
  {
    path: "",
    component: LandingPageComponent
  },

];
