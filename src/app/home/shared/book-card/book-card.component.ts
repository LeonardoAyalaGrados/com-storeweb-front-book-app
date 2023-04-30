import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent   {
  
  @Input() book!: Book;

  constructor(
    private cartService: CartService
  ) { }


  addBookToCart(book: Book) {
    this.cartService.addItem(book);
  }
  
  removeBookFromCart(book: Book) {
    this.cartService.removeItem(book);
  }
  
  bookExistInCart(book: Book): boolean {
    return this.cartService.itemAlreadyExists(book);
  }
}
