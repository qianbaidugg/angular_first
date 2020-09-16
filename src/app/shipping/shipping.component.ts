import { Component, OnInit } from '@angular/core';

//add
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  //add
  shippingCosts;

  constructor(
    //add
    private cartService: CartService
  ) { }

  ngOnInit() {
    //add
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}