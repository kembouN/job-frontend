
export interface EnterpriseRequest{
  userId: number
  name: string,
  email: string,
  description: string,
  siteLink: string,
  sector: string,
  telephone: number,
  logo: File
}

export interface Enterprise{
    enterpriseId: number,
    enterpriseCode: string,
    enterpriseName: string,
    enterpriseEmail: string,
    description: string,
    siteLink: string,
    sector: string,
    telephone: number,
    profil: Blob
}
