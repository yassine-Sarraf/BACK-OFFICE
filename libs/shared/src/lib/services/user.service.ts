import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResOneUser, ResUser, User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:5000/users"

  getAllUsers():Observable<ResUser>{
    return this.http.get<ResUser>(`${this.apiUrl}`)
  }
  deleteUser(id:string|undefined):Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/${id}`)
  }
  getOneUser(id:string|undefined):Observable<ResOneUser>{
    return this.http.get<ResOneUser>(`${this.apiUrl}/${id}`)
  }
  updateUser(id:string|undefined,data:User){
    return this.http.patch(`${this.apiUrl}/${id}`,data)
  }
  postUser(data:User){
    return this.http.post(`${this.apiUrl}/register`,data)
  }

}
