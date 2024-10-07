import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable } from 'rxjs';
import { Register } from '../model/register';
import { Forgot } from '../model/forgot';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8087/api/auth';
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
