import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AuthGuard, AuthInterceptor, UsersModule } from '@brightcoding/users';
import { SigninComponent } from 'libs/users/src/lib/components/signin/signin.component';
import { AuthService } from 'libs/users/src/lib/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    OrdersListComponent,
    AddProductComponent,
    ProductsListComponent,
    EditProductComponent
    
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,AuthService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
