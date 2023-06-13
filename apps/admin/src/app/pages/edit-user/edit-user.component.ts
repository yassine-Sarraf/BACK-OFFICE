import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { ResOneUser, ResUser, User } from 'libs/shared/src/lib/models/user';
import { UserService } from 'libs/shared/src/lib/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic (CAR)', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru','USA','Zambia']
  Cities: string[] = [
    'Paris',
    'New York',
    'Tokyo',
    'London',
    'Barcelona',
    'Rome',
    'Los Angeles',
    'Sydney',
    'Dubai',
    'Berlin',
    'Istanbul',
    'Rio de Janeiro',
    'Moscow',
    'Cape Town',
    'Amsterdam',
    'Hong Kong',
    'Singapore',
    'Toronto',
    'San Francisco',
    'Las Vegas',
    'Bangkok',
    'Mumbai',
    'Shanghai',
    'Rio de Janeiro',
    'Miami',
    'Honolulu',
    'Dublin',
    'Venice',
    'Vienna',
    'Madrid',
    'Marrakesh',
    'São Paulo',
    'Beijing',
    'Seoul',
    'Edinburgh',
    'Florence',
    'Prague',
    'Zurich',
    'Copenhagen',
    'Stockholm',
    'Oslo',
    'Buenos Aires',
    'Montreal',
    'Vancouver',
    'San Diego',
    'Seattle',
    'Austin',
    'New Orleans',
    'Nashville',
    'Charleston',
    'Savannah',
    'Dubrovnik',
    'Krakow',
    'Budapest',
    'Athens',
    'Istanbul',
    'Jerusalem',
    'Cairo',
    'Casablanca',
    'Lisbon',
    'Edinburgh',
    'St. Petersburg',
    'Reykjavik',
    'Havana',
    'Helsinki',
    'Munich',
    'Frankfurt',
    'Zagreb',
    'Ljubljana',
    'Bucharest',
    'Sofia',
    'Prague',
    'Krakow',
    'Warsaw',
    'Kiev',
    'Riga',
    'Tallinn',
    'Vilnius',
  ];
  constructor(private service:UserService , private router:ActivatedRoute,private route:Router){}
  user:User={}
  ngOnInit(): void {
    this.router.params.subscribe((responce)=>{
      this.getUser(responce['id'])
    })
    console.log(this.edit)
  }  
  getUser(id:string|undefined){
    this.service.getOneUser(id).subscribe((responce:ResOneUser)=>{
      if (responce.user) {
        this.user=responce.user
      }
      this.userToPatch={
        address:this.user.address,
        city:this.user.city,
        country:this.user.country,
        email:this.user.email,
        isAdmin:this.user.isAdmin,
        name:this.user.name,
        password:this.user.password,
        phone:this.user.phone
      }
    
      console.log(this.user)
    })
  }
  edit=false
  changeEdit(){
    this.edit=this.edit?false:true
    console.log(this.edit)
  }

  userToPatch:User={

  }
  

  editUser(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.updateUser(this.user._id,this.userToPatch).subscribe()//the main instruction
        swalWithBootstrapButtons.fire(
          'Updated!',
          'Your file has been updated.',
          'success'
        )
        this.route.navigate(['/dashBoard/usersList'])
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your data are safe :)',
          'error'
        )
      }
    })
  }
  



}
