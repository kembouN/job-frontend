import { Component, input, linkedSignal, output } from '@angular/core';
import { JobResponse } from '../../models/job';
import { CustomIconComponent } from '../../../shared/components/custom-icon/custom-icon.component';
import { CustomImageComponent } from '../../../shared/components/custom-image/custom-image.component';

@Component({
  selector: 'app-job-card',
  imports: [CustomImageComponent, CustomIconComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {

  imageWidth= input<number>();
  imageHeight= input<number>();
  imageBorderRadius= input<number>();
  job = input.required<JobResponse>();
}
