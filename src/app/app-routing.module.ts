import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
