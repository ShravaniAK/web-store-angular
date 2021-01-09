import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http : HttpClient) { }
  getUrl = 'https://web-store-c3888-default-rtdb.firebaseio.com/blogs.json';

  fetchPost(){
    return this.http.get<any>(this.getUrl);
  }

  fetchSinglePost(id){
    let fetchUrl = `https://web-store-c3888-default-rtdb.firebaseio.com/blogs/${id}.json`;
    return this.http.get<any>(fetchUrl);
  }
}
