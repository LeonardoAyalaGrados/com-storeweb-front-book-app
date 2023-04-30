import { Component, OnInit } from '@angular/core';
import { Book, BookPage } from 'src/app/admin/books/shared/book.model';
import { CartService } from '../shared/cart.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  page:number=0;
  books:Book[]=[];
  constructor(private homeService:HomeService, private cartService:CartService){

  }

  ngOnInit(): void {
      this.homeService.getBooks().subscribe(
        (data)=>{
          this.books=data.content;
          this.page=data.number;
        });
  }
  addBookToCart(book:Book){
    this.cartService.addItem(book);
  }
  removeBookFromCart(book: Book){
      this.cartService.removeItem(book);
  }
  bookExistInCart(book:Book):boolean{
    return this.cartService.itemAlreadyExists(book);
  }

  loadMoreBooks(){
    this.homeService.getBooks(this.page+1).subscribe(
      (data)=>{
        this.books.push(...data.content)
        this.page=data.number;
      }
    );
  }

}
