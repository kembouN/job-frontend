import { Component, inject } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CustomButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);
  initialLoginRequest: LoginRequest = {
    username: "",
    password: ""
  };

  succesMessage: string = "";

  onSubmit(): void{
    this.authService.userLogin(this.initialLoginRequest).subscribe(res => {
      this.succesMessage = res.message;
      console.log(res.message)
      localStorage.setItem("finderToken", res.content.token);
      // localStorage.setItem("finderId", res.content.user.finderId.toString());
      // localStorage.setItem("userId", res.content.user.userId.toString());
      // localStorage.setItem("enterprise", res.content.user.isEnterprise.toString());
      // localStorage.setItem("admin", res.content.user.isAdmin.toString());
      localStorage.setItem("finderName", res.content.user.nom);
      localStorage.setItem("finderMail", res.content.user.username);
      this.router.navigateByUrl('/type-contrat-et-diplome');
    })
  }
}
