import { Component } from '@angular/core';
import { LandingContentComponent } from "./landing/components/landing-content/landing-content.component";
import { JobCardComponent } from "./job/components/job-card/job-card.component";

@Component({
  selector: 'app-root',
  imports: [LandingContentComponent, JobCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobfront';
}
