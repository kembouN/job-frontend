import { Job } from "./job";


export interface LocalisationRequest{
  job: Job;
  town: string;
  country: string;
}

export interface Localisation{
  localisationId: number
  pays: string;
  ville: string;
}
