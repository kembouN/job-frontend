import { Component, inject, input } from '@angular/core';
import { CustomIconComponent } from "../../../../shared/components/custom-icon/custom-icon.component";
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";
import { TypeContratResponse } from '../../../models/type-contrat';
import { ContratService } from '../../../services/contrat.service';

@Component({
  selector: 'app-type-contrat-card',
  imports: [CustomIconComponent, CustomButtonComponent],
  templateUrl: './type-contrat-card.component.html',
  styleUrl: './type-contrat-card.component.scss'
})
export class TypeContratCardComponent {

  typeContratService = inject(ContratService);

  contrat = input.required<TypeContratResponse>();
  iconClass = "fas fa-trash poubelle"
  iconColor = "red"
  buttonBorder = 50;
  buttonWidth = 20;
  buttonColor = "rgb(226, 225, 225, 0.1)";
  buttonHeight = 20;
  buttonMarginTop = 10

  deleteTypeContrat(typeContratId: number){
    console.log(typeContratId);
    this.typeContratService.deleteTypeContrat(typeContratId).subscribe();
  }
}
