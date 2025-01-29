

export interface UserDto{
  userId: number;
  finderId: number;
  username: string;
  derniereConnection: Date;
  isActive: boolean;
  isEnterprise: boolean;
  codeUtilisateur: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  sexe: string;
  telephone: number;
}