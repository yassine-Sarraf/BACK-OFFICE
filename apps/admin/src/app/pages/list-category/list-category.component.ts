import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Category, ResCategory } from 'libs/shared/src/lib/models/category';
import { CategoryService } from 'libs/shared/src/lib/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  constructor(private service:CategoryService, private router:Router){}
  Allcategories:Category[]|undefined=[]
  ngOnInit(): void { 
    this.getAllCategories()
  }
  getAllCategories(){
    this.service.getAllCategories().subscribe((responce:ResCategory)=>{
      this.Allcategories=responce.categorie
    })
  }
  deleteCategory(id:string|undefined){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        if (id) {
          this.service.deleteCategory(id).subscribe(()=>{
            this.getAllCategories()
            this.router.navigate(['/dashBoard/categoryList'])
          })
        }  
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  editCategory(data:Category|undefined){
    this.router.navigate(['/dashBoard/editCategory',data])
  }

}
