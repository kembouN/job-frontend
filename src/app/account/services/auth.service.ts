import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../shared/models/api-response';
import { RegisterFinder } from '../../finder/models/finder';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = environment.apiBaseUrl;
  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  userLogin(data: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiBaseUrl}/user/login`, data);
  }

  finderRegistration(data: RegisterFinder){
    return this.http.post(`${this.apiBaseUrl}/job`, data);
  }

  isTokenExpired(): boolean {
    let token = localStorage.getItem("finderToken");
    if(!token) return true;

    try {
      let decodedToken = jwtDecode(token);
      let expiry = decodedToken.exp ? new Date(decodedToken.exp* 1000) : null;
      return expiry ? new Date() > expiry : true;
    } catch (error) {
      return true;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("finderToken");
  }

  logout(): void{
    localStorage.removeItem("finderToken");
    this.router.navigateByUrl('/login');
  }

}
