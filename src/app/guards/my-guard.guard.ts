import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

class UserToken {}
class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

  constructor(private permissions: Permissions, private currentUser: UserToken) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.permissions.canActivate(this.currentUser, route.params['id']);
  }
}
