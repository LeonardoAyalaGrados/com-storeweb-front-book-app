import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BookPage, User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users:User[]=[];
  bookPage?: BookPage;
  displayedColumns: string[] = ['firstName', 'fullName', 'email','createdAt','rol','actions'];
  constructor(private router:Router,private userService:UserService){

  }
  
  ngOnInit(): void {
    this.listUser();
  }

  listUser(){
    this.userService.paginate().subscribe(
      (data)=>{
        console.log(data);
        this.bookPage=data;
      },(error)=>{
        console.log(error);
      }
    );
  }
  delete(id:any){
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.delete(id).subscribe(
        (data)=>{
            console.log(data);
            this.listUser();
        },(error)=>{
          console.log(error);
        }
      );
    }
}

put(id:number){
    this.router.navigate(['/admin/user/edit',id]);
}

paginateBooks(event: PageEvent) {
  const page = event.pageIndex;
  const size = event.pageSize;

  this.userService.paginate(size, page)
    .subscribe(bookPage => {
      this.bookPage = bookPage;
    })
}

}
