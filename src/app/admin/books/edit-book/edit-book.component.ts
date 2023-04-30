import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  myForm:FormGroup;
  id:number;
  errors?: string[];
  constructor(private router:Router, private bookService:BookService,private fb:FormBuilder,private activateRoute:ActivatedRoute){
    this.myForm=this.fb.group({
      title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      slug:['',Validators.required],
      desc:['',Validators.required],
      price:['',[Validators.required,Validators.min(0)]],
      coverPath:['',Validators.required],
        filePath:['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.bookService.findById(this.id).subscribe(
      (data)=>{
          console.log(data);
          this.myForm.patchValue(data);
      },(error)=>{
          console.log(error);
      }
    );
  }
  controlHasError(control: string, error: string): boolean {
    return this.myForm!.controls[control].hasError(error) && this.myForm!.controls[control].touched
  }
  
  editBook(){
      this.bookService.update(this.id,this.myForm.value).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigate(['/admin/book/list']);
        },(error)=>{
          console.log(error);
        }
      );
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
