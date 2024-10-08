import { Injectable } from '@angular/core';
import { AuthenticationToken } from '../models/authenticationToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'User'

  // Call this method after successful login
  public saveToken(token: AuthenticationToken): void {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  public getToken(): string | null {
    const userData = localStorage.getItem(this.tokenKey) || "{accessToken: ''}";
    const data = JSON.parse(userData);
    return data.accessToken;
  }

  public clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
