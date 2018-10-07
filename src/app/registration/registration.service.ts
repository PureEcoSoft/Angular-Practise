import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable()
export class RegistrationService {

  constructor(private http:HttpClient) { }

  onRegister(frm:any){
    console.log(frm);
   return this.http.post("http://localhost:3001/registration",frm,{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }
}
