import { Component, input, linkedSignal } from '@angular/core';
import { JobCardComponent } from '../../../job/components/job-card/job-card.component';
import { JobResponse } from '../../../job/models/job';

@Component({
  selector: 'app-landing-content',
  imports: [JobCardComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss'
})
export class LandingContentComponent {

  jobs = input.required<JobResponse[]>();
  _jobs = linkedSignal(this.jobs);
  
}
