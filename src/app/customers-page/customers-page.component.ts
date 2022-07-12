import { Component, OnInit } from '@angular/core';
import { app } from '../app';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  data: any;

  customers: app.CustomerData[] = [{"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" },
  {"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" },
  {"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitData(): void{
    console.log(this.customers);
  }

  dataChange(data: any) {
    this.data = data;
    console.log(data);
  }
}
