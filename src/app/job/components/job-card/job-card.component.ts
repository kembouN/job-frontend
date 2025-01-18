import { Component, Input } from '@angular/core';
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

  @Input() saveIcon!: CustomIconComponent;
  @Input() userIcon!: CustomIconComponent;
  @Input() imageWidth!: number;
  @Input() imageHeight!: number;
  @Input() imageBorderRadius!: number;
  @Input() job!: JobResponse;
}
