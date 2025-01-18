import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-info-buble',
  imports: [],
  templateUrl: './custom-info-buble.component.html',
  styleUrl: './custom-info-buble.component.scss'
})
export class CustomInfoBubleComponent {

  @Input() id!: number;
  @Input() width!: number;
  @Input() height!: number;
  @Input() text!: string;
  @Input() title?: string;

}
