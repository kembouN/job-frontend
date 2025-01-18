import { Component, input } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-custom-modal',
  imports: [CustomButtonComponent],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent {

  isVisible = input<boolean>(false);
  isCentered = input.required<boolean>();
  width = input.required<number>();
  height = input<number | string>();
  modalTitle = input.required<string>();

}
