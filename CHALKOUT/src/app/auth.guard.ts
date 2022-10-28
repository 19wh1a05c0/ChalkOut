import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

//This is guard is the authentication guard of the project
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //dependency injection - we are in dependent of emp service object
  constructor(private service : UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.getUserLoggedIn();
  }
  
}
