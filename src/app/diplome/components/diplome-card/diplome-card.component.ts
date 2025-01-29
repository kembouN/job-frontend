import { Component, input } from '@angular/core';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { CustomIconComponent } from "../../../shared/components/custom-icon/custom-icon.component";

@Component({
  selector: 'app-diplome-card',
  imports: [CustomButtonComponent, CustomIconComponent],
  templateUrl: './diplome-card.component.html',
  styleUrl: './diplome-card.component.scss'
})
export class DiplomeCardComponent {

  diplomeLibelle = input.required<string>();
  diplomeCode = input.required<string>()
  diplomeDate = input.required<string>();
  iconClass = "fas fa-trash poubelle"
  iconColor = "red"
  buttonBorder = 50;
  buttonWidth = 20;
  buttonColor = "rgb(226, 225, 225, 0.1)";
  buttonHeight = 20;
  buttonMarginTop = 10

}
