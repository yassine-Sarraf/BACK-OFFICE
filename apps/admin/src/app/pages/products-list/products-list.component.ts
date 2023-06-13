import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ResProduct } from 'libs/shared/src/lib/models/product';
import { ProductService } from 'libs/shared/src/lib/services/product.service';

@Component({
  selector: 'brightcoding-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  constructor(private service:ProductService,private router:Router){}
  products:Product[] | undefined = []

  card=false;
  tableCard(){
    this.card=this.card?false:true
  }
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.service.getProducts().subscribe(({product}:ResProduct)=>{ 
    this.products = product 
    })
  }
  deleteProduct(id:string|undefined){
    this.service.deleteProduct(id).subscribe(()=>{
      this.getProducts()
      this.router.navigate(['/dashBoard/productsList'])
    })
  }
  editProduct(id:string|undefined){
    this.router.navigate(['/dashBoard/editProduct/',id])
  }
}
