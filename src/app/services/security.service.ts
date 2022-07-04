import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private ROLES: BehaviorSubject<string[]> = new BehaviorSubject(["visitor"]);
  public lastRoleArray: string[] = [];

  constructor(private router: Router) { 
    this.ROLES.subscribe({
      next: (roles) => {
        this.lastRoleArray = roles;
      }
    })
  }

  //Make request to 
  public addRole(email:string, password: string){
    if(this.lastRoleArray.filter(role => role == "employee").length == 0){
      this.ROLES.next([...this.lastRoleArray, "employee"])
    }
  }

  public getRoles(){
    return this.ROLES;
  }

  public signOut(){
    this.ROLES.next(["visitor"]);
    window.location.reload();
  }
}