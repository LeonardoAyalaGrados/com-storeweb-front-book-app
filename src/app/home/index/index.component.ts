import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';
import { CartService } from '../shared/cart.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  books:Book[]=[];
  constructor(private homeService: HomeService, private cartService:CartService){

  }
  
  ngOnInit(): void {
    this.homeService.getLastBooks().subscribe(
      (data)=>{
        console.log(data);
        this.books=data;
      },(error)=>{
        console.log(error);
      }
      );
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

}
