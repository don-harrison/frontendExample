import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: any

  readOnlyCols: number[] = []

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.readOnlyCols = this.backendService.getReadOnlyCols("products");
  }
}
