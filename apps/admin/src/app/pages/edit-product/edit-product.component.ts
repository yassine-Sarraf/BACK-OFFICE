import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Category, ResCategory } from 'libs/shared/src/lib/models/category';
import { Product, ResOneProduct } from 'libs/shared/src/lib/models/product';
import { CategoryService } from 'libs/shared/src/lib/services/category.service';
import { ProductService } from 'libs/shared/src/lib/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(private service:ProductService,private rout:Router,private CatService:CategoryService,private router:ActivatedRoute){}
  id=''

  
  ngOnInit(): void {
    this.getCategories()
    this.router.params.subscribe((res)=>{
      this.id=res['id'] 
      this.getProduct()           
    })      

  }
  productToPatch:Product={}
  selectedFile:File|undefined
  categories:Category[]=[]

  getCategories(){
    this.CatService.getAllCategories().subscribe((res:ResCategory)=>{    
      if (res.categorie) {
        this.categories=res.categorie
      }  
    })
  }

  getProduct(){
    this.service.getOneProduct(this.id).subscribe((res:ResOneProduct)=>{
      console.log(res.product);
      if (res.product) {
        this.productToPatch=res.product
      }
      
    })
  }
  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  PatchProduct(){
    if (!this.selectedFile) {
      console.log('no file has been selected')
      return  
    }
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed && this.selectedFile) {
        Swal.fire('Saved!', '', 'success')
        this.service.patchProduct(this.id,this.selectedFile,this.productToPatch).subscribe(()=>{
          this.rout.navigate(['/dashBoard/productsList'])
        })

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
