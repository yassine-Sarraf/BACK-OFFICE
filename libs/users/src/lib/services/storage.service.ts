import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  private readonly APP_TOKEN='app_token'
  private readonly APP_EMAIL='app_email'
  private readonly APP_NAME='app_name'
  name =new BehaviorSubject<string|null>(null)
  email =new BehaviorSubject<string|null>(null)
  token:any =new BehaviorSubject<string|null>(this.getToken())

  removeToken(){
    return localStorage.removeItem(this.APP_TOKEN)
    this.setName(null)
  }
  expiredToken(expiration:number){
    return Math.floor(new Date().getTime()/1000)<expiration
  }
  //_____________________________________________________
  // setEmail(data:string){
  //   localStorage.setItem(this.APP_EMAIL,data)
  // }
  getEmail(){
    return localStorage.getItem(this.APP_EMAIL)
  }
  removeEmail(){
    return localStorage.removeItem(this.APP_EMAIL)
  }
  //_____________________________________________________

  
  setName(data:string|null){
    this.name.next(data)
  }
  setEmail(data:string|null){
    this.email.next(data)
  }
  setToken(data:string|null){
    this.token.next(data)
  }
  getToken(){
    return this.token
  }
}
