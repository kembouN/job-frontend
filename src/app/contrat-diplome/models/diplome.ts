

export interface DiplomeResponse{
  diplomeId: number;
  libelle: string;
  code: string;
  createdDate: Date;
}

export interface Diplome{
  diplomeId: number;
  libelle: string;
  code: string;
}

export interface DiplomeRequest{
  libelle: string;
  code: string;
}
