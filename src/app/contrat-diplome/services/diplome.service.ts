import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Diplome, DiplomeRequest, DiplomeResponse } from '../models/diplome';
import { ApiResponse } from '../../shared/models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  constructor(private readonly http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllDiplomes(): Observable<ApiResponse<DiplomeResponse[]>>{
    return this.http.get<ApiResponse<DiplomeResponse[]>>(`${this.apiBaseUrl}/diplome`)
  }

  addDiplome(data: DiplomeRequest): Observable<ApiResponse<Diplome>>{
    return this.http.post<ApiResponse<Diplome>>(`${this.apiBaseUrl}/diplome`, data)
  }

  deleteDiplome(diplomeId: number): Observable<ApiResponse<void>>{
    return this.http.delete<ApiResponse<void>>(`${this.apiBaseUrl}/diplome/${diplomeId}`)
  }
}
