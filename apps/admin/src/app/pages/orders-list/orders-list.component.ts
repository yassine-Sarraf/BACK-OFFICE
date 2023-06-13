import { Component, OnInit } from '@angular/core';
import { OrdersService } from "libs/shared/src/lib/services/orders.service";
import { Order, ResOrder } from "libs/shared/src/lib/models/order";
import { response } from 'express';

@Component({
  selector: 'brightcoding-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  constructor(private service:OrdersService){}
  orders:Order[]|undefined=[]

  patchUser(option:string|undefined,id:string|undefined){
    this.orderToPatch.status=option
    if (id && option) {
      this.service.patchOrder(id,this.orderToPatch).subscribe()
    }
    
  }
  orderToPatch:Order={
  }
  status=['shipped','received','canceled','pending']
  ngOnInit(): void {
      this.getOrders()
  }
  getOrders(){
    this.service.getOrders().subscribe((response:ResOrder)=>{
      console.log('responce',response)
      this.orders=response.orders
    })
  }

}
