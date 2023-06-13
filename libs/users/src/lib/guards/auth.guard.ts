import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

// import { json } from 'stream/consumers';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService:StorageService,private router:Router){}  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token:any
    this.storageService.token.subscribe((res:string|null)=>{token=res })

    try {
      const decodedToken:any = jwt_decode(token);
      this.storageService.setToken(decodedToken)
      console.log('Decoded Token:', decodedToken);
      this.storageService.setName(decodedToken.name) //behaviorSubject
      this.storageService.setEmail(decodedToken.email) //behaviorSubject

    } catch (error) {
      console.error('Failed to decode token:');
    }
    // if (!token) {
    //   this.router.navigate(['/login'])
    //   return false
    // }
    // if (token.split('.').length===3) {
    //   const payload=token.split('.')[1]
    //   const {isAdmin,exp,email, name}=JSON.parse(atob(payload))
  
    //   this.storageService.setName(name) //behaviorSubject
    //   this.storageService.setEmail(email) //behaviorSubject

    //   return isAdmin && !this.storageService.expiredToken(exp)
    // }     
    return true;
  }
  
}
