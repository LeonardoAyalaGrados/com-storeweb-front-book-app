import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/admin/books/shared/book.model';
import { HomeRoutingModule } from '../home-routing.module';
import { HomeModule } from '../home.module';
import { CartService } from '../shared/cart.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit{
  book?:Book;
  
  constructor( private cartService: CartService,private homeService:HomeService, private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    const slug=this.activatedRoute.snapshot.params['slug'];
    this.homeService.getBook(slug).subscribe(
       (data)=>{
          this.book=data;
       }
    );
  }
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
