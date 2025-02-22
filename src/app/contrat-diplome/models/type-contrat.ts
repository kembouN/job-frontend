

export interface TypeContratRequest{
  libelle: string;
  code: string
}

export interface TypeContratResponse{
  typeContratId: number;
  libelle: string;
  code: string;
  uploadDate: Date
}

export interface TypeContrat{
  typeContratId: number;
  libelle: string;
  code: string;
}
