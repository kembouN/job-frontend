import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../shared/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = environment.apiBaseUrl;
  constructor(private readonly http: HttpClient) { }

  userLogin(data: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    let response$ = this.http.post<ApiResponse<LoginResponse>>(`${this.apiBaseUrl}/user/login`, data);
    response$.subscribe(res => {
      localStorage.setItem("finderToken", res.content.token);
      localStorage.setItem("finderId", res.content.user.finderId.toString())
      localStorage.setItem("userId", res.content.user.userId.toString())
      localStorage.setItem("account", res.content.user.isEnterprise.toString())
      localStorage.setItem("admin", res.content.user.isAdmin.toString())
      localStorage.setItem("finderName", res.content.user.nom)
      localStorage.setItem("finderMail", res.content.user.username)
    }).unsubscribe();
    return response$;
  }



}
