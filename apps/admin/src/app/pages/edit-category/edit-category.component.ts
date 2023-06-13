import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'libs/shared/src/lib/models/category';
import { CategoryService } from 'libs/shared/src/lib/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  constructor(private service:CategoryService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((response:Category)=>{
      console.log(response)
      this.id=response._id
      let{color,icon,label}=response
      this.categoryToPut={color,icon,label}
    })
  }
  id:string|undefined

  categoryToPut:Category={
    label:'',
    icon:'',
    color:'',
  }
  editCategory(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.service.putCategory(this.id,this.categoryToPut).subscribe()
        this.router.navigate(['/dashBoard/categoryList'])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })




   
  }

  }



