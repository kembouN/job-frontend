import { Component, input} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {

  text = input.required<string>();
  textSize = input<number>();
  disabled = input<boolean>();
  width = input<number>();
  height = input<number>();
  left = input<number>();
  rigth = input<number>();
  bottom = input<number>();
  top = input<number>();
  type = input.required<string>();
  color = input<string>();
  borderRadius = input<number>();

}
