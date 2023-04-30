import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  myForm:FormGroup; 
  id:number;
  errors?: string[];
  constructor(private activateRoute:ActivatedRoute,private userService:UserService, private router:Router,private fb:FormBuilder) {
    this.myForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      fullName:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      role:['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.userService.findById(this.id).subscribe(
      (data)=>{
          console.log(data);
          this.myForm.patchValue(data);
      },(error)=>{
          console.log(error);
      }
    );
  }
  editUser(){
    this.userService.put(this.id,this.myForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/admin/user/list']);
      },(error)=>{
        console.log(error);
      }
    );
  }

  controlHasError(control: string, error: string): boolean {
    return this.myForm.controls[control].hasError(error) && this.myForm.controls[control].touched
  }
}
