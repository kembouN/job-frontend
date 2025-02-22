import { Component, inject, input, linkedSignal } from '@angular/core';
import { CustomModalComponent } from "../../../../shared/components/custom-modal/custom-modal.component";
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";
import { FormsModule } from '@angular/forms';
import { TypeContratRequest } from '../../../models/type-contrat';
import { ContratService } from '../../../services/contrat.service';

@Component({
  selector: 'app-type-contrat-form',
  imports: [CustomModalComponent, CustomButtonComponent, FormsModule],
  templateUrl: './type-contrat-form.component.html',
  styleUrl: './type-contrat-form.component.scss'
})
export class TypeContratFormComponent {

  typeContratService = inject(ContratService)

  initialContrat : TypeContratRequest = {
    libelle: '',
    code: ''
  }

  message = "";

  placeHolderLibelle = "Freelance, Stage..."
  labelLibelle = "Libelle du contrat";
  type = "text";
  required = true;
  placeHolderCode = "CDI, CDD, St.Pro"
  typeReset = "reset";
  typeSubmit = "submit";
  textSize = 1;
  inputWidth = 200;
  inputHeight = 20;
  cancel = "Annuler";
  save = "Enregistrer"
  disableButton = false;
  disableSubmit = true;
  buttonSubmitWidth = 90;
  buttonCancelWidth = 80;
  buttonHeight = 35;
  marginButtonTop = 5;
  marginButtonRigth = 5;
  marginCancelButtonLeft = 10;
  marginSubmitButtonLeft = 30;
  marginButtonBottom = 5;
  cancelButtonColor = "rgb(226, 225, 225, 0.4)";
  submitButtonColor = "rgb(27, 213, 27, 0.8)";
  buttonBorderRadius = 8;

  onChange(e: Event){
    let value = e.target as HTMLInputElement
    console.log(value.value)
  }


  addTypeContrat(){
    console.log(this.initialContrat);
    this.typeContratService.addTypeContrat(this.initialContrat).subscribe(res => {
      this.message = res.message;
    });
  }

}
