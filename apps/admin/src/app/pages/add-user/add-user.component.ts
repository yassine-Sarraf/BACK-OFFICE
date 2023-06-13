import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'libs/shared/src/lib/models/user';
import { UserService } from 'libs/shared/src/lib/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'brightcoding-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private service:UserService,private router:Router){}


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
  userToAdd:User={}
  addUser(){
    this.service.postUser(this.userToAdd).subscribe(()=>{
      this.router.navigate(['/usersList'])
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

