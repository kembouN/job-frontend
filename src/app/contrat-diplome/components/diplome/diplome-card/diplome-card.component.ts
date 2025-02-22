import { Component, inject, input } from '@angular/core';
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";
import { CustomIconComponent } from "../../../../shared/components/custom-icon/custom-icon.component";
import { DiplomeResponse } from '../../../models/diplome';
import { DiplomeService } from '../../../services/diplome.service';

@Component({
  selector: 'app-diplome-card',
  imports: [CustomButtonComponent, CustomIconComponent],
  templateUrl: './diplome-card.component.html',
  styleUrl: './diplome-card.component.scss'
})
export class DiplomeCardComponent {

  diplomeService = inject(DiplomeService)

  diplome = input.required<DiplomeResponse>();
  iconClass = "fas fa-trash poubelle"
  iconColor = "red"
  buttonBorder = 50;
  buttonWidth = 20;
  buttonColor = "rgb(226, 225, 225, 0.1)";
  buttonHeight = 20;
  buttonMarginTop = 10

  message = "";


  deleteDiplome(diplomeId: number){
    console.log(diplomeId);
    this.diplomeService.deleteDiplome(diplomeId).subscribe(res => {
      this.message = res.message;
    });
  }
}
