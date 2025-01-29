import { Component } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CustomButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  initialLoginRequest = {
    email: "",
    password: ""
  };
}
