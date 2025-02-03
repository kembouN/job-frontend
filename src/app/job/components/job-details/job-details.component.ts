import { Component, input, output } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { JobResponse } from '../../models/job';
import { CustomIconComponent } from '../../../shared/components/custom-icon/custom-icon.component';
import { CustomImageComponent } from "../../../shared/components/custom-image/custom-image.component";

@Component({
  selector: 'app-job-details',
  imports: [CustomButtonComponent, CustomIconComponent, CustomImageComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  job = input.required<JobResponse>();
  // displayDetails = input.required<string>();
  closeDetails = output();
}
