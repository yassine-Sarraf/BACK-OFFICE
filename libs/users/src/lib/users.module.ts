import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { SigninComponent } from './components/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes), RouterModule,ReactiveFormsModule,HttpClientModule],
  declarations: [
    SigninComponent
  ],
})
export class UsersModule {}
