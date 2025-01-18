import { TypeContrat } from "../../type-contrat/models/type-contrat";
import { Exigence } from "./exigence";
import { Localisation } from "./localisation";
import { Mission } from "./mission";
import { NiveauRequis, NiveauRequisDto } from "./niveau-requis";


export interface JobRequest {

  finderId: number;
  jobTitle: string;
  isFullTime: boolean;
  experienceMin: number;
  isRemote: boolean;
  salary: number;
  domaine: string;
  typeContratId: number;
  description: string;
  delai: Date;
  country: string;
  town: string;
  exigences: string[];
  missions: string[];
  studyLevels: NiveauRequisDto[];
}

export interface JobResponse{
  jobId: number;
  jobTitle: string;
  isFullTime: boolean;
  experienceMin: number;
  isRemote: boolean;
  salary: number;
  domaine: string;
  totalCandidat: number;
  recruiter: string;
  recruiterImage: string;
  typeContrat: TypeContrat;
  jobDescription: string;
  delai: Date;
  exigences: Exigence[];
  missions: Mission[];
  levels: NiveauRequis[];
  localisation: Localisation[]
  uploadDate: Date;
}

export interface Job{
  jobId: number;
  jobTitle: string;
  isFullTime: boolean;
  anneeExpMin: number;
}
