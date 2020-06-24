import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInServiceService } from 'src/app/logged-in-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {

  constructor(private loggedInServiceService: LoggedInServiceService, private router: Router )
  {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if(this.loggedInServiceService.isSignedIn())
    {
      return true;
    }
    else 
    {
      alert("You don't have rights view this page. Redirecting to Login");
      // this.router.navigate(['signIn']);
    }
  }
  
}
