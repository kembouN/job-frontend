import { ApiResponse } from './../../shared/models/api-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { JobRequest, JobResponse } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private readonly http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllJobWithFilters(
    jobTitle?: string,
    fullTime?: boolean,
    remote?: boolean,
    salary?: number,
    domaine?: string,
    contrat?: string,
    publisher?: string,
    localisation?: string
  ): Observable<ApiResponse<JobResponse[]>>{
    let params = new HttpParams();
    if (jobTitle) params = params.set('jobTitle', jobTitle);
    if (fullTime !== undefined) params = params.set('isFullTime', fullTime);
    if (remote !== undefined) params = params.set('isRemote', remote);
    if (salary !== undefined) params = params.set('salary', salary.toString());
    if (domaine) params = params.set('domaine', domaine);
    if (contrat) params = params.set('typeContrat', contrat);
    if (publisher) params = params.set('publisher', publisher);
    if (localisation) params = params.set('localisation', localisation);

    return this.http.get<ApiResponse<JobResponse[]>>(`${this.apiBaseUrl}/job/list`, {params});

  }

  addJob(data: JobRequest){
    this.http.post(`${this.apiBaseUrl}/job`, data);
  }

}
