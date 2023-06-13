import { Route } from '@angular/router';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AuthGuard } from '@brightcoding/users';

export const appRoutes: Route[] = [
    {path:'', redirectTo:'dashBoard/productsList', pathMatch: 'full'},

    {path:'dashBoard',component:DashboardComponent,canActivate:[AuthGuard],children:[
        {path:'usersList',component:UserListComponent},
        {path:'categoryList',component:ListCategoryComponent},
        {path:'orders',component:OrdersListComponent},
        {path:'addUser',component:AddUserComponent,canActivateChild:[AuthGuard]},
        {path:'addProduct',component:AddProductComponent},
        {path:'addCategory',component:AddCategoryComponent},
        {path:'productsList',component:ProductsListComponent},
        {path:'editProduct/:id',component:EditProductComponent},
        {path:'editCategory',component:EditCategoryComponent},
        {path:'editUser/:id',component:EditUserComponent},


    ]},




    // {path:'addProduct',component:AddProductComponent},
    // {path:'addUser',component:AddUserComponent},
    // {path:'orders',component:OrdersListComponent},
    // {path:'editUser/:id',component:EditUserComponent},
    // {path:'usersList',component:UserListComponent},
    // {path:'categoryList',component:ListCategoryComponent},
    // {path:'addCategory',component:AddCategoryComponent},
    {path:'editCategory',component:EditCategoryComponent}

];
