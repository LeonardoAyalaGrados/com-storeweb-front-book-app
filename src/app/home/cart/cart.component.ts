import { Component } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(private cartService: CartService){

  }
  
  get cartItems(){
    return  this.cartService.items;
  }

  remove(book:Book){
    this.cartService.removeItem(book);
  }

  get total(){
    return this.cartItems.map(i=>i.price).reduce((p1, p2)=>p1+p2,0);
  }
}
