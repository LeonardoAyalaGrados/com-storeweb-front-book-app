import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  myForm:FormGroup;  
  errors?: string[];
  constructor(private router:Router, private bookService:BookService,private fb:FormBuilder){
      this.myForm=this.fb.group({
        title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
        slug:['',Validators.required],
        desc:['',Validators.required],
        price:['',[Validators.required,Validators.min(0)]],
        coverPath:['',Validators.required],
        filePath:['',Validators.required]
      });
    }

    controlHasError(control: string, error: string): boolean {
      return this.myForm.controls[control].hasError(error) && this.myForm.controls[control].touched
    }

    createSlug() {
      const slug = this.myForm!.controls['title'].value
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
  
      this.myForm!.controls['slug'].setValue(slug);
    }
    createBook(){
        this.bookService.create(this.myForm.value).subscribe(
          (data)=>{
              console.log(this.myForm.value);
              this.myForm.reset();
              this.router.navigate(['/admin/book/list']);
          },(error)=>{
              console.log(error);
              this.myForm.reset();
              alert("algo ocurrio");
          }
        );
    }
    uploadFile(event: any, control:string){
      const file= event?.target.files[0];
      if (file) {
        const formData=new FormData();
        formData.append('file',file);
        this.bookService.upploadFile(formData).subscribe(
          (data)=>{
            console.log(data);
            this.myForm!.controls[control].setValue(data.path);
          },(error)=>{
            console.log(error);
          }
        );
      }
    }
}
