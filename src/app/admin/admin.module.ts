import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './books/book-list/book-list.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
@NgModule({
  declarations: [
    BookListComponent,
    NewBookComponent,
    EditBookComponent,
    UserListComponent,
    NewUserComponent,
    EditUserComponent,
    AdminLayoutComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AdminModule { }
