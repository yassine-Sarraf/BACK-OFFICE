import { Component, OnInit } from '@angular/core';
import { Category, ResCategory, ResOneCategory } from 'libs/shared/src/lib/models/category';
import { Router } from '@angular/router';
import { CategoryService } from "C:/Users/lenovo/brightcoding/libs/shared/src/lib/services/category.service";
@Component({
  selector: 'brightcoding-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private service:CategoryService,private router: Router){}
  categoryToAdd:Category={
    color:"",
    label:"",
    icon:""
  }
  addCategory(){
    
    this.service.addCategory(this.categoryToAdd).subscribe()
    this.router.navigate(['/categoryList'])
  }
}
