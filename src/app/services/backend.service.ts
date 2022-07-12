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
    this.$products = this.http.get(Constants.productsUrl) as Observable<app.ProductData[]>;
  }

  getCustomers() {
    this.$customers = this.http.get(Constants.customersUrl) as Observable<app.CustomerData[]>;
  }

  getInventory() { 
    this.$inventory = this.http.get(Constants.inventoryUrl) as Observable<app.InventoryData[]>;
  }

  saveCustomers(customers: app.CustomerData[]) {
    this.http.post(Constants.saveCustomersUrl, customers);
  }
}
