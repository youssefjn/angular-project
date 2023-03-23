import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products: any = [];
  cart: any = [];
  ngOnInit() {
    this.http.get('http://localhost:3000/api/products').subscribe((data) => {
      this.products = data;
    })
  }
  orderP(product: any) {
    this.cart.push(product);
  }
  getTotalPrice() {
    return this.cart.reduce((total: any, product: any) => total + product.price, 0);
  }

  checkout() {
    window.location.href = 'http://localhost:4200/login';
  }

}
