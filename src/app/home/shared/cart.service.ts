import { Injectable } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: Book[]=[];
  private key='storebook_cart0223';

  constructor() {
    const itemString = localStorage.getItem(this.key);
    this._items=itemString? JSON.parse(itemString):[];
   }
  
  get items(){
    return this._items;
   } 
  addItem(book: Book) { 
      this._items.push(book);
      this.saveInLocalStorage();
  }

  removeItem(book: Book) {
      this._items=this._items.filter(i=>i.id !=book.id);
      this.saveInLocalStorage();
  } 

  clear() { 
      this._items=[];
      this.saveInLocalStorage();
  }

  itemAlreadyExists(book: Book):boolean {
     return this._items.findIndex(i=>i.id==book.id)>=0;
  }

  saveInLocalStorage(){
    localStorage.setItem(this.key, JSON.stringify(this._items));
  }
}
