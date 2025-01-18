import { Diplome } from "../../diplome/models/diplome";



export interface NiveauRequisDto{
  description: string;
  diplomeId: number;
}

export interface NiveauRequisRequest{
  studyLevel: NiveauRequisDto[];
  jobId: number;
}

export interface NiveauRequis{
  niveauId: number;
  libelle: string;
  diplome: Diplome;
}