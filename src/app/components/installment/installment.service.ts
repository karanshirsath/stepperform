import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService {
  constructor(private http: HttpClient) {}
  url = 'http://3.6.39.44:4000/mtpl/getInstallmentOptions';

  getInstallmentData = () => {
    return this.http.get(this.url);
  }
}
