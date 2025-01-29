import { Component } from '@angular/core';
import { JobResponse } from '../../../job/models/job';
import { JobCardComponent } from '../../../job/components/job-card/job-card.component';

@Component({
  selector: 'app-landing-content',
  imports: [JobCardComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss'
})
export class LandingContentComponent {

  job!: JobResponse[];

  
}
