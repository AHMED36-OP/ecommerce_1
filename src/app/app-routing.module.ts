import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProudectComponent } from './component/proudect/proudect.component';
import { RegisterComponent } from './component/register/register.component';
import { CartComponent } from './component/cart/cart.component';
import { CatgoriesComponent } from './component/catgories/catgories.component';
import { BrandsComponent } from './component/brands/brands.component';
import { NotfondComponent } from './component/notfond/notfond.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './gard/auth.guard';
import { DetialsComponent } from './component/detials/detials.component';
import { ChekoutComponent } from './component/chekout/chekout.component';
import { DetialsCategoiresComponent } from './component/detials-categoires/detials-categoires.component';

const routes: Routes = [
  {path:'' ,canActivate:[authGuard],
  component:BlankLayoutComponent,
  children:[
    {path:'',redirectTo:"home" ,pathMatch:"full"},
    {path:'home',component:HomeComponent, title:"home"},
    {path:'Catgories',component:CatgoriesComponent, title:"Catgories"},
    {path:'Catgoriesdetials/:idcat',component:DetialsCategoiresComponent, title:"DetialsCategoiresComponent"},
    {path:"brands" ,component:BrandsComponent ,title:"brands"},
    {path:'proudect',component:ProudectComponent, title:"proudect"},
    {path:'chekout/:idcart',component:ChekoutComponent, title:"chekout"},
    {path:'detials/:idProudect',component:DetialsComponent, title:"detials"},
    {path:'cart',component:CartComponent, title:"cart"},
  ]},
  {path:"" ,component:AuthLayoutComponent,children:[
        {path:'login',component:LoginComponent, title:"login"},
        {path:'register',component:RegisterComponent, title:"register"},
  ]},

  {path:'**',component:NotfondComponent, title:"Not found "},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
