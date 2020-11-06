import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'homeLink', component: HomeComponent},
  {path:'registerLink', component: RegisterComponent},
  {path:'loginLink', component:LoginComponent},
  {path:'forgetLink',component:ForgetPasswordComponent},
  {path:'changePasswordLink',component:ChangePasswordComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"dashboardLink",component:DashboardComponent},
  {path:'productdetail', component: ProductDetailComponent},
  {path:'productList', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
