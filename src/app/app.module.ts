import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProudectComponent } from './component/proudect/proudect.component';
import { CatgoriesComponent } from './component/catgories/catgories.component';
import { BrandsComponent } from './component/brands/brands.component';
import { NavbarAuthComponent } from './component/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './component/navbar-blank/navbar-blank.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfondComponent } from './component/notfond/notfond.component';
import { FooterComponent } from './component/footer/footer.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DetialsComponent } from './component/detials/detials.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchproudectPipe } from './searchproudect.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ChekoutComponent } from './component/chekout/chekout.component';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { DetialsCategoiresComponent } from './component/detials-categoires/detials-categoires.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProudectComponent,
    CatgoriesComponent,
    BrandsComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    LoginComponent,
    RegisterComponent,
    NotfondComponent,
    FooterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    DetialsComponent,
    SearchproudectPipe,
    ChekoutComponent,
    DetialsCategoiresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS ,useClass:MyhttpInterceptor ,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
