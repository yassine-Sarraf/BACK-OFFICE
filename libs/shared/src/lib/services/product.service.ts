import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ResOneProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  apiUrl="http://localhost:5000/product"

  postProduct(image: File,data:Product){
    const formData = new FormData();
    formData.append('thumbnail', image);
    formData.append('product',JSON.stringify(data))
    return this.http.post<any>(`${this.apiUrl}`,formData);
  }
  getProducts(){
    return this.http.get(this.apiUrl)
  }
  deleteProduct(id:string|undefined ):Observable<ResOneProduct> {
    return this.http.delete<ResOneProduct>(`${this.apiUrl}/${id}`)
  }

  getOneProduct(id:string|undefined){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  patchProduct(id:string|undefined,image:File,data:Product|undefined):Observable<ResOneProduct> {
    console.log('patch');
    
    const formData= new FormData()
    formData.append('thumbnail',image)
    formData.append('product',JSON.stringify(data))
    return this.http.patch<ResOneProduct>(`${this.apiUrl}/${id}`,formData)
  }

}
