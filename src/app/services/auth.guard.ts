import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {ApiService} from "./api.service";
@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(
      private authService: ApiService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.getAuthUser().pipe(map((user) => {
      const auth = route.data['auth']
      if (user && !auth) {
        return this.router.createUrlTree(['authorized/dashboard'])
      } else if(!user && auth) {
        return this.router.createUrlTree(['guest/login'])
      } else {
        return true
      }
    }))
  }
}
