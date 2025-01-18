import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  imports: [],
  templateUrl: './custom-icon.component.html',
  styleUrl: './custom-icon.component.scss'
})
export class CustomIconComponent {

  @Input() id!:number;
  @Input() borderRadius!:number;
  @Input() class!: string;
  @Input() color!: string;
}
