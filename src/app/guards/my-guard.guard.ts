import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

  constructor(private permissions: Permissions, private currentUser: UserToken, private security: SecurityService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.permissions.canActivate(this.security.lastRoleArray, this.currentUser, route.params['id']);
  }
}

class UserToken {}
class Permissions {
  canActivate(roles: string[], user: UserToken, id: string): boolean {
    return roles.filter(role => role == 'employee').length > 0;
  }
}
