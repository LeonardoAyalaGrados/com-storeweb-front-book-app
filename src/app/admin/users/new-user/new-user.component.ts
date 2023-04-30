import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  myForm:FormGroup; 
  errors?: string[];
  constructor(private userService:UserService, private router:Router,private fb:FormBuilder) {
    this.myForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      role:['',Validators.required]
    });
  }

  createUser(){
    this.userService.create(this.myForm.value).subscribe(
      (data)=>{
          console.log(this.myForm.value);
          this.myForm.reset();
          this.router.navigate(['/admin/user/list']);
      },(error)=>{
          console.log(error);
          alert("algo ocurrio");
      }
    );
  }

  controlHasError(control: string, error: string): boolean {
    return this.myForm.controls[control].hasError(error) && this.myForm.controls[control].touched
  }

}
