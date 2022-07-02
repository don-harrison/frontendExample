import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  email: any;
  password: any

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChange(): void {
  }


  signIn(){
    this.securityService.addRole(this.email, this.password);
    this.router.navigateByUrl('/home')
  }
}
