import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { Forgot } from '../models/forgot';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8085/api/auth';
  constructor(private httpClient: HttpClient) { }

  loginUser(login: Login): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/login`, login);
  }

  registerUser(register: Register): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/register`, register);
  }

  changePassword(forgot: Forgot): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/forgot-password`, forgot);
  }
}
