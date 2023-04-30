import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiImgPipe } from './api-img.pipe';



@NgModule({
  declarations: [
    ApiImgPipe
  ],
  exports: [
    ApiImgPipe
  ]
})
export class SharedModule { }
