import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import{Observable}from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private _HttpClient:HttpClient ,private _router:Router) { }

  userData:any;
  saveUserData(){
    if(localStorage.getItem('token') !=null ){
      let encodetoken:any =localStorage.getItem('token');
      let decodetoken =jwtDecode(encodetoken)
      console.log(decodetoken);
      this.userData=decodetoken
    }
  }

  register(userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData )
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData )
  }


  logoutuser():void{
    localStorage.removeItem("token")
    this._router.navigate(["/login"])
  }
}
