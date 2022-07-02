import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  email: any;
  name: any;
  address: any;

  constructor() { }

  ngOnInit(): void {
  }

}
