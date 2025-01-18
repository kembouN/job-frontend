import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-image',
  imports: [],
  templateUrl: './custom-image.component.html',
  styleUrl: './custom-image.component.scss'
})

export class CustomImageComponent {

  @Input() id!: number;
  @Input() width!: number;
  @Input() height!: number;
  @Input() source?: string;
  @Input() alt!: string;
  @Input() borderRadius!: number;

}
