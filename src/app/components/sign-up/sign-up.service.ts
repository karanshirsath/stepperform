import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  url='http://3.6.39.44:4000/user/signup'

  registerUser=(userData)=>{
    console.log(userData);
    
    return this.http.post(this.url,userData)
  }
}
