import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category, ResCategory } from 'libs/shared/src/lib/models/category';
import { Product, ResOneProduct } from 'libs/shared/src/lib/models/product';
import { CategoryService } from 'libs/shared/src/lib/services/category.service';
import { ProductService } from "libs/shared/src/lib/services/product.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers : [ProductService]
})
export class AddProductComponent implements OnInit {
  constructor(private service: ProductService,private catService:CategoryService,private router:Router) {}

  ngOnInit(): void {
      this.getCategories()
  }

  selectedFile: File|undefined;

  productToAdd:Product={
    title:'',
    description:'',
    content:'',
    brand:'',
    countStock:0,
    price:0 ,
    rating:0,
    isFeatred:false,
  }
  categories:Category[]|undefined=[]
  getCategories(){
    this.catService.getAllCategories().subscribe((res:ResCategory)=>{
      this.categories=res.categorie
      console.log(this.categories);      
    })
    
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    console.log(this.productToAdd)
  }
  postProduct() {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    console.log('ok')
    this.service.postProduct(this.selectedFile,this.productToAdd).subscribe(
      (res)=> { 
        console.log('done')
        this.router.navigate(['/dashBoard/productsList'])
        
      }
    );
  }

}
