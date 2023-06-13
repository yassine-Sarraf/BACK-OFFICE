import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRrespnose } from '../models/userModel';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  constructor(private http:HttpClient) {}
  private readonly authUrl="http://localhost:5000/users"
  login(email:string,password:string):Observable<AuthRrespnose> {
    return this.http.post<AuthRrespnose> (`${this.authUrl}/login`,{email,password})
  }

  //_______________________________________________________________________
  
  private dataSubject = new BehaviorSubject<string>('Initial value');
  public data$ = this.dataSubject.asObservable();

  setData(data: string) {
    this.dataSubject.next(data);
  }

  getData(): string {
    return this.dataSubject.getValue();
  }
  
  
  
}
