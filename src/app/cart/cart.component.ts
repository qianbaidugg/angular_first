import { Component, OnInit } from '@angular/core';

//add
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //add
  items;

  constructor(
    //add 
     private cartService: CartService
  ) { }

  ngOnInit() {
    //add
    this.items = this.cartService.getItems();
  }

}