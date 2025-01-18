import { Component, Output, input} from '@angular/core';

@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {

  type = input.required<string>();
  name = input.required<string>();
  label= input<string>();
  labelSize = input<number>(1);
  icon = input<any>();
  required = input<boolean>();
  placeholder = input<string>();
  disabled = input<boolean>();
  errorMessage = input<string>();
  errorSize = input<number>(0.6);
  inputWidth = input.required<number>();
  inputHeight = input.required<number>();
  @Output() onChange !: any;
  @Output() onBlur !: any;
  @Output() onKeyDown !: any;

}
