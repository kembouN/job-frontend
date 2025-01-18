

export interface Mission{
  missionId: number;
  description: string;
}

export interface MissionRequest{
  missions: string[];
  jobId: number;
}