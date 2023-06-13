import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, ResOneOrder, ResOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:5000/order"
  getOrders():Observable<ResOrder>{
    return this.http.get<ResOrder>(this.apiUrl);
  }
  patchOrder(id:string,data:Order):Observable<ResOneOrder>  {
    return this.http.patch<ResOneOrder>(`${this.apiUrl}/${id}`,data)
  }
}
