import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: any

  constructor() { }

  ngOnInit(): void {
    this.products = [{"product": "data", "price": "data", "location": "data"},
    {"product": "data", "price": "data", "location": "data"},
    {"product": "data", "price": "data", "location": "data"}
    ];
  }

}
