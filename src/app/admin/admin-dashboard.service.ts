import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http: HttpClient) { }
  
  getUrl = 'https://web-store-c3888-default-rtdb.firebaseio.com/blogs.json';
  putUrl = 'https://web-store-c3888-default-rtdb.firebaseio.com/blogs.json?auth=';


  private header = new HttpHeaders({
    "Content-Type": "application/json",
    "apiKey": config.apiKey
  })

  createPost(data) {
    return this.http.get<any>(this.getUrl);
  }

  savePost(res) {
    let token = localStorage.getItem("webstore-admin-token");
    // console.log("token",token);
    return this.http.put<any>(this.putUrl + token, res, { headers: this.header })
  }
}
