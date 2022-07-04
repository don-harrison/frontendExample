import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  private hasAccess: boolean = false;

  ngOnInit(): void {
    this.securityService.getRoles().subscribe({
      next: (roles) => {
        this.hasAccess = (roles.filter(role => role == "employee").length > 0);
      }
    })
  }

  isLoggedIn(): boolean{
    return this.hasAccess;
  }

  signOut(){
    this.securityService.signOut();
  }
}
