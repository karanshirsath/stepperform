import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInServiceService {

  constructor() { }

  logout() :void 
  {    
    sessionStorage.setItem('isLoggedIn','false');    
    sessionStorage.removeItem('username');    
  }  
}
