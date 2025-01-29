import { Component, OnInit } from '@angular/core';
import { CustomIconComponent } from "../../../shared/components/custom-icon/custom-icon.component";


interface LandingImageSlide{
  url: string,
  description: string,
}

@Component({
  selector: 'app-landing-footer',
  imports: [CustomIconComponent],
  templateUrl: './landing-footer.component.html',
  styleUrl: './landing-footer.component.scss'
})
export class LandingFooterComponent implements OnInit{

  teamMail:string  = "knk.towork@gmail.com";

  images: LandingImageSlide[] = [
    {url: 'employment.png', description: 'Décrochez le travail de vos rêves...'},
    {url: 'job_xp.png', description: 'La recherche du travail est un exercice que nous vous facilitons à travers nos différents procedés'},
    {url: 'opportunities.png', description: 'Nous mettons à votre disposition des offres d\'emploi diversifiées'}
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }, 3000);
  }


}
