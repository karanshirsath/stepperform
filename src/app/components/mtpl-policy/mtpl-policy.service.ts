import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MtplPolicyService {

  constructor(private http:HttpClient) { }
  url="http://3.6.39.44:4000/mtpl/postPurchasePolicy"
  postData=(data)=>{
    return this.http.post(this.url,data)
  }
}
