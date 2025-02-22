import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../shared/models/api-response';
import { RegisterFinder } from '../../finder/models/finder';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = environment.apiBaseUrl;
  constructor(private readonly http: HttpClient) { }

  userLogin(data: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiBaseUrl}/user/login`, data);
  }

  finderRegistration(data: RegisterFinder){
    return this.http.post(`${this.apiBaseUrl}/job`, data);
  }

}
