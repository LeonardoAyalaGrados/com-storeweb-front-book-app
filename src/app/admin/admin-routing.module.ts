import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UserListComponent } from './users/user-list/user-list.component';


const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
            {path:'book/list', component:BookListComponent},
            {path:'book/new', component:NewBookComponent},
            {path:'book/edit/:id',component:EditBookComponent},
            {path:'user/list', component:UserListComponent},
            {path:'user/new',component:NewUserComponent},
            {path:'user/edit/:id',component:EditUserComponent}]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
