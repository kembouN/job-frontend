import { Component } from '@angular/core';
import { LandingContentComponent } from "./landing/components/landing-content/landing-content.component";
import { JobCardComponent } from "./job/components/job-card/job-card.component";
import { RegisterComponent } from "./account/component/register/register.component";
import { LandingHeaderComponent } from "./landing/components/landing-header/landing-header.component";
import { LoginComponent } from "./account/component/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RegisterComponent, LandingHeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobfront';
}
