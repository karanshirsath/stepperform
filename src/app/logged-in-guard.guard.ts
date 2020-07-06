import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInServiceService } from 'src/app/logged-in-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {

  constructor(private loggedInServiceService: LoggedInServiceService, private router: Router ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.isLoggedIn()) {
        return true;
        }
        // navigate to login page as user is not authenticated
      alert('You are not authenticated to view this page. Redirecting to login.');
      this.router.navigate(['/signIn']);
      return false;
  }
  public isLoggedIn(): boolean {
     let status = false;
     if (sessionStorage.getItem('isLoggedIn') == 'true') {
        status = true;
     }
     else {
        status = false;
        }
     return status;
     }
  }
