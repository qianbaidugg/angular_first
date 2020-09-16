import { Injectable } from '@angular/core';

//add
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  // add
  items = [];
  constructor(
    //add 
    private http: HttpClient
  ) { }

  addToCart(product ) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}