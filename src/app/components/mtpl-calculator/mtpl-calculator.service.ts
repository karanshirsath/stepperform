import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MtplCalculatorService {
  constructor(private http: HttpClient) {}
  posturl = 'http://3.6.39.44:4000/mtpl/postmtplCalculator';
  geturl = 'http://3.6.39.44:4000/mtpl/getmtplCalculator';
  postData = data => {
    return this.http.post(this.posturl, data);
  }
  getData = id => {
    return this.http.post(this.geturl, id);
  }
}
