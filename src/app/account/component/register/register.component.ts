import { Component } from '@angular/core';
import { RegisterRequest } from '../../models/register';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-register',
  imports: [FormsModule, CustomButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  user!: RegisterRequest;

  initialUser = {
    nom: "",
    prenom: "",
    username: "",
    password: "",
    cPassword: "",
    isEnterprise: false,
    pays: "",
    ville: "",
    birthDay: Date,
    sexe: "",
    numTel: ""
  };

  onSubmit(){
    console.log(this.initialUser);
  }

}
