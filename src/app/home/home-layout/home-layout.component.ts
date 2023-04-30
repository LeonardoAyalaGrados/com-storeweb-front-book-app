import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  constructor(private cartService: CartService){

  }

  get cartItems(){
    return this.cartService.items;
  }
}
