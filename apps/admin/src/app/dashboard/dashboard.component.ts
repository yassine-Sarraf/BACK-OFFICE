import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthGuard, AuthRrespnose } from '@brightcoding/users';
import { SigninComponent } from 'libs/users/src/lib/components/signin/signin.component';
import { AuthService } from 'libs/users/src/lib/services/auth.service';
import { StorageService } from 'libs/users/src/lib/services/storage.service';

@Component({
  selector: 'brightcoding-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private service:AuthService ,private localStorage:StorageService,private router:Router,private route:ActivatedRoute ){}
  
  email:null|string=null
  name:string|null=null

  ngOnInit(): void {
    this.localStorage.name.subscribe((res: string | null)=>{this.name=res})
    this.localStorage.email.subscribe((res:string| null)=>{this.email=res})
    // this.user=this.localStorage.getEmail()
  }
  logout(){
    this.localStorage.removeToken()
    this.router.navigate(['/login'])
  }

}
