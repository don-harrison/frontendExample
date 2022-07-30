import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Constants } from '../constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { app } from '../app'

@Injectable({
  providedIn: 'root'
})
export class BackendService implements OnInit{

  $products!: Observable<app.ProductData[]>;
  $customers!: Observable<app.CustomerData[]>;
  $inventory!: Observable<app.InventoryData[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getProducts() {
    this.$products = new Observable(subscriber => {
      subscriber.next([{"productId": "data", "price": 2, "location": "data"},
      {"productId": "data", "price": 3, "location": "data"},
      {"productId": "data", "price": 2, "location": "data"}
      ]);
    });
    return this.$products;
    //this.http.get(Constants.productsUrl) as Observable<app.ProductData[]>;
  }

  getCustomers() {
    this.$customers = new Observable(subscriber => {
      subscriber.next([{"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" },
        {"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" },
        {"customerId": "data", "name": "data", "address": "data", "phoneNumber": "data", "email": "data" }
      ]);
    })
    return this.$customers;
    // this.$customers = this.http.get(Constants.customersUrl) as Observable<app.CustomerData[]>;
  }

  getInventory() { 
    this.$inventory = this.http.get(Constants.inventoryUrl) as Observable<app.InventoryData[]>;
  }

  saveCustomers(customers: app.CustomerData[]) {
    this.http.post(Constants.saveCustomersUrl, customers);
  }
  
  getReadOnlyCols(page: string): number[]{
    switch(page) {
      case "customers" : return [0]
      case "products" : return []
      case "inventory" : return [0,1,3]
      default : return []
    }
  }
}
