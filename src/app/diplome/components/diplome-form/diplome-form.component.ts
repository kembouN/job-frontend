import { Component } from '@angular/core';
import { DiplomeRequest } from '../../models/diplome';
import { CustomInputComponent } from "../../../shared/components/custom-input/custom-input.component";
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { CustomModalComponent } from "../../../shared/components/custom-modal/custom-modal.component";

@Component({
  selector: 'app-diplome-form',
  imports: [CustomInputComponent, CustomButtonComponent, CustomModalComponent],
  templateUrl: './diplome-form.component.html',
  styleUrl: './diplome-form.component.scss'
})
export class DiplomeFormComponent{

  diplomeRequest!: DiplomeRequest;

  modalVisible = false;
  nameLibelle = "libelle";
  placeHolderLibelle = "Baccalaureat, Brevet d'Etude du..."
  labelLibelle = "Libelle du diplome";
  type = "text";
  required = true;
  nameCode = "code";
  labelCode = "Code du diplome";
  placeHolderCode = "BACC, BACC+2, BEPC..."
  typeButton = "button";
  typeSubmit = "submit";
  textSize = 1;
  inputWidth = 200;
  inputHeight = 20;
  cancel = "Annuler";
  save = "Enregistrer"
  disableButton = false;
  disableSubmit = true;
  buttonWidth = 80;
  buttonHeight = 35;
  marginButtonTop = 5;
  marginButtonRigth = 5;
  marginButtonLeft = 30;
  marginButtonBottom = 5;
  cancelButtonColor = "rgb(226, 225, 225, 0.4)";
  submitButtonColor = "rgb(27, 213, 27, 0.8)";
  buttonBorderRadius = 8;
  modalTitle ="Ajouter un nouveau diplome";


  toggleModal(){
    if(!this.modalVisible){
      this.modalVisible = true;
    }else {
      this.modalVisible = false
    }
    console.log(this.modalVisible);
  }

  onSubmit(){
    
  }
}
