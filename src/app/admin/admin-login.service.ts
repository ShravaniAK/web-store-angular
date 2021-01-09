import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`;

  login(email, password) {
    return this.http.post<any>(this.signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
