import { Component } from '@angular/core';
import { CustomInputComponent } from "../../../shared/custom-input/custom-input.component";
import { CustomButtonComponent } from "../../../shared/custom-button/custom-button.component";

@Component({
  selector: 'app-login-form',
  imports: [CustomInputComponent, CustomButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

}
