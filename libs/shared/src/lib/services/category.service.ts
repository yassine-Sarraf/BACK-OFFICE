import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from 'rxjs';
import { Category, ResCategory, ResOneCategory } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:5000/categorie"

  getAllCategories():Observable<ResCategory>{
    return this.http.get<ResCategory>(this.apiUrl);
  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${this.apiUrl}/${id}`)
  }
  putCategory(id:string|undefined,data:Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiUrl}/${id}`,data)
  }
  addCategory(data:Category):Observable<ResOneCategory>{
    return this.http.post<ResOneCategory>(this.apiUrl,data)
  }
  

}