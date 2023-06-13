import { Component, OnInit } from '@angular/core';
import { UserService } from 'libs/shared/src/lib/services/user.service';
import { User,ResOneUser,ResUser  } from 'libs/shared/src/lib/models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'brightcoding-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private service: UserService , private router:Router){}
  users:User[]=[]

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.service.getAllUsers().subscribe((responce:ResUser)=>{
      this.users=responce.user
      console.log('users are',this.users)
    })
  }
  deleteUser(id:string|undefined){
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
        this.service.deleteUser(id).subscribe(()=>{
          this.getUsers()
          this.router.navigate(['/usersList'])
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  navigate(id:string|undefined){
    this.router.navigate(['/dashBoard/editUser/',id])
  }
}
