import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  hasAccess: boolean = this.securityService.lastRoleArray.filter(role => role == "employee").length > 0;

  ngOnInit(): void {
    console.log(this.hasAccess);
    this.securityService.getRoles().subscribe({
      next: (roles) => {
        console.log(roles);
        this.hasAccess = (roles.filter(role => role == "employee").length > 0);
        console.log(this.hasAccess);
      }
    })
  }
}
