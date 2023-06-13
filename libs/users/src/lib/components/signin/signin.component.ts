import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthRrespnose } from '../../models/userModel';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  constructor(private service:AuthService,private storageService:StorageService,private router:Router){}
 
  loginForm=new FormGroup({
    email:new UntypedFormControl('',[Validators.required,Validators.min(10)]),
    password:new UntypedFormControl('',Validators.required)

  })
  authError=false
  messageError="error please try again"

 
  signin(email:string,password:string){
    this.service.login(email,password).subscribe({
      next:(res:AuthRrespnose)=>{
        // if (res.name) {
        //   this.storageService.setName(res.name)
        //   this.storageService.name.subscribe(res=>{console.log(res)})
        // }
        // if (res.email) {
        //   this.storageService.setEmail(res.email)
        // }

        if (res.token ) {
          this.storageService.setToken(res.token)
          this.storageService.token.subscribe((res:any)=>{console.log(res)})
        }
        this.router.navigate([''])
      },
      error:res=>{
        this.authError=true
        this.loginForm.reset()
        console.log(res)}
    })
  }
  submit(){
    if (this.loginForm.invalid) {
      return
    }
    this.signin(this.form.email.value,this.form.password.value)
  }
  get form(){ //alias for form to optimise
    return this.loginForm.controls
  }

}
