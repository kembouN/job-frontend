import { JobService } from './../../../job/services/job.service';
import { Component, inject } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth';

@Component({
  selector: 'app-login',
  imports: [CustomButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  initialLoginRequest: LoginRequest = {
    username: "",
    password: ""
  };

  succesMessage: string = "";

  onSubmit(){
    this.authService.userLogin(this.initialLoginRequest).subscribe(res => {
      this.succesMessage = res.message;
      
    })
  }
}
