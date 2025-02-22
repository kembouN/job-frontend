import { TypeContratRequest, TypeContratResponse } from './../models/type-contrat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/models/api-response';
import { TypeContrat } from '../models/type-contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private readonly http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllTypeContrats(): Observable<ApiResponse<TypeContratResponse[]>>{
    return this.http.get<ApiResponse<TypeContratResponse[]>>(`${this.apiBaseUrl}/type-contrat`);
  }

  addTypeContrat(data:TypeContratRequest): Observable<ApiResponse<TypeContrat>>{
    return this.http.post<ApiResponse<TypeContrat>>(`${this.apiBaseUrl}/type-contrat`, data);
  }

  deleteTypeContrat(typeContratId: number): Observable<ApiResponse<void>>{
    return this.http.delete<ApiResponse<void>>(`${this.apiBaseUrl}/type-contrat/${typeContratId}`)
  }

}
