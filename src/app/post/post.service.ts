import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }


  getAllPost(){
    return this.http.get("https://jsonplaceholder.typicode.com/users",{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }
}
