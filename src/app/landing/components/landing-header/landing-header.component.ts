import { Component } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-landing-header',
  imports: [CustomButtonComponent],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss'
})
export class LandingHeaderComponent {

  displayProp = "none";

}
