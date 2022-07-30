import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { app } from '../app';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  data: any;

  customers: app.CustomerData[] = [];

  readOnlyCols: number[] = []

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getCustomers().subscribe(customers => {
      this.customers = customers;
    })

    this.readOnlyCols = this.backendService.getReadOnlyCols("customers");
  }

  submitData(): void{
    console.log(this.customers);
  }

  dataChange(data: any) {
    this.data = data;
  }
}
