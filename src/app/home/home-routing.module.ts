import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  {
    path:'',
    component:HomeLayoutComponent,
    children:[
            {path:'', component:IndexComponent},
            {path:'book', component: BooksComponent},
            {path:'book/:slug',component:BookDetailComponent},
            {path:'cart',component:CartComponent}
            ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
