

export interface RegisterFinder {
  nom: string;
  prenom: string;
  username: string;
  password: string;
  cPassword: string;
  isEnterprise: boolean;
  pays: string;
  ville: string;
  birthday: Date;
  sexe: string;
  numTel: number;
  photoProfil: string;
}

export interface FinderResponse{
  nom: string;
  prenom: string;
  username: string;
  pays: string;
  ville: string;
  birthday: Date;
  sexe: string;
  numTel: number;
  photoProfil: string;
}