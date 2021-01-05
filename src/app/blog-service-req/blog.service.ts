import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`;
  getUrl = 'https://web-store-c3888-default-rtdb.firebaseio.com/hellogroup.json';
  putUrl = 'https://web-store-c3888-default-rtdb.firebaseio.com/hellogroup.json?auth=';

  private header = new HttpHeaders({
    "Content-Type": "application/json",
    "apiKey": config.apiKey
  })

  login(email, password) {
    return this.http.post<any>(this.signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }


  createPost(data) {
    return this.http.get<any>(this.getUrl);
  }

  savePost(res) {
    let token = localStorage.getItem("webstore-admin-token");
    // console.log("token",token);
    return this.http.put<any>(this.putUrl + token, res, { headers: this.header })
  }

  
}
