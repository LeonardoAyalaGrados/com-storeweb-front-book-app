import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Book ,BookPage} from '../shared/book.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[]=[];
  bookPage?: BookPage;
  displayedColumns: string[] = ['title', 'price', 'createdAt', 'actions'];
  constructor(private bookService:BookService,private router:Router){

  }

  ngOnInit(): void {
    this.listBok();
  }

  listBok(){
    this.bookService.paginate().subscribe(
      (data)=>{
        console.log(data);
        this.bookPage=data;
      },(error)=>{
        console.log(error);
      }
    );
  }

  delete(id:any){
      if (confirm('¿Estás seguro de eliminar el libro?')) {
        this.bookService.delete(id).subscribe(
          (data)=>{
              console.log(data);
              this.listBok();
          },(error)=>{
            console.log(error);
          }
        );
      }
  }

  put(id:number){
      this.router.navigate(['admin/book/edit',id]);
  }

  paginateBooks(event: PageEvent) {
    const page = event.pageIndex;
    const size = event.pageSize;

    this.bookService.paginate(size, page)
      .subscribe(bookPage => {
        this.bookPage = bookPage;
      })
  }
}
