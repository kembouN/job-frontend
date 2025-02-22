import { Component, inject, OnInit } from '@angular/core';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { TypeContratCardComponent } from "../type-contrat/type-contrat-card/type-contrat-card.component";
import { DiplomeCardComponent } from "../diplome/diplome-card/diplome-card.component";
import { TypeContratResponse } from '../../models/type-contrat';
import { DiplomeResponse } from '../../models/diplome';
import { ContratService } from '../../services/contrat.service';
import { DiplomeService } from '../../services/diplome.service';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { DiplomeFormComponent } from "../diplome/diplome-form/diplome-form.component";
import { TypeContratFormComponent } from "../type-contrat/type-contrat-form/type-contrat-form.component";
import { CustomModalComponent } from "../../../shared/components/custom-modal/custom-modal.component";

@Component({
  selector: 'app-contrat-diplome-page',
  imports: [SideBarComponent, TypeContratCardComponent, DiplomeCardComponent, CustomButtonComponent, DiplomeFormComponent, TypeContratFormComponent, CustomModalComponent],
  templateUrl: './contrat-diplome-page.component.html',
  styleUrl: './contrat-diplome-page.component.scss'
})
export class ContratDiplomePageComponent implements OnInit{

  contratService = inject(ContratService);
  diplomeService = inject(DiplomeService);
  modalDiplomeTitle ="Ajouter un nouveau diplome";
  modalContratTitle ="Ajouter un nouveau type de contrat";


  contratFormOpened = false;
  diplomeFormOpened = false;

  openTypeContratForm(){
    this.contratFormOpened = true;
  }

  closeDiplomeModal(){
    this.diplomeFormOpened = false;
  }


  closeContratModal(){
    this.contratFormOpened = false;
  }

  openDiplomeForm(){
    this.diplomeFormOpened = true;
  }

  contrats! : TypeContratResponse[];
  diplomes!: DiplomeResponse[];
  name = localStorage.getItem("finderMail");

  ngOnInit(): void {
    console.log(localStorage.getItem("finderToken"));
    this.contratService.getAllTypeContrats().subscribe(c => {
      this.contrats = c.content;
    });

    this.diplomeService.getAllDiplomes().subscribe(d => {
      this.diplomes = d.content;
    })
  }

}
