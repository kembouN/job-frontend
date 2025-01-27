import { Component } from '@angular/core';
import { DiplomeRequest } from '../../models/diplome';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { CustomModalComponent } from "../../../shared/components/custom-modal/custom-modal.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diplome-form',
  imports: [FormsModule, CustomButtonComponent, CustomModalComponent],
  templateUrl: './diplome-form.component.html',
  styleUrl: './diplome-form.component.scss'
})
export class DiplomeFormComponent{

  diplomeRequest?: DiplomeRequest;

  initialDiplome = {
    libelle:  "",
    code: ""
  };

  modalVisible = true;
  placeHolderLibelle = "Baccalaureat, Brevet d'Etude du..."
  labelLibelle = "Libelle du diplome";
  type = "text";
  required = true;
  placeHolderCode = "BACC, BACC+2, BEPC..."
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
  modalTitle ="Ajouter un nouveau diplome";


  close(){
    this.modalVisible = false;
  }

  onChange(e: Event){
    let value = e.target as HTMLInputElement
    console.log(value.value)
  }


  onSubmit(){
    console.log(this.initialDiplome);
  }

}
