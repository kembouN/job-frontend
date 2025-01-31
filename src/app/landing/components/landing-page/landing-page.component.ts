import { Component, inject, OnInit } from '@angular/core';
import { JobResponse } from '../../../job/models/job';
import { JobService } from '../../../job/services/job.service';
import { CustomButtonComponent } from "../../../shared/components/custom-button/custom-button.component";
import { JobCardComponent } from "../../../job/components/job-card/job-card.component";
import { CustomIconComponent } from "../../../shared/components/custom-icon/custom-icon.component";
import { FinderResponse } from '../../../finder/models/finder';

interface LandingImageSlide{
  url: string,
  description: string,
}

@Component({
  selector: 'app-landing-page',
  imports: [CustomButtonComponent, JobCardComponent, CustomIconComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements OnInit{

  jobService = inject(JobService);

  displayProp = "none";
  teamMail:string  = "knk.towork@gmail.com";


  images: LandingImageSlide[] = [
    {url: 'employment.png', description: 'Décrochez le travail de vos rêves...'},
    {url: 'job_xp.png', description: 'Recherche du travail optimisé'},//'La recherche du travail est un exercice que nous facilitons à travers nos différents procedés'},
    {url: 'opportunities.png', description: 'Offres d\'emploi diversifiées'}
  ];

  currentIndex = 0;
  intervalId: any;

  jobTitle = "";


  jobs!: JobResponse[];
  finders!: FinderResponse[];

  ngOnInit(): void {
    this.jobService.getAllJobWithFilters().subscribe(res => {
      this.jobs = res.content;
    });
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }, 3000);
    console.log(this.jobTitle)
  }


}
