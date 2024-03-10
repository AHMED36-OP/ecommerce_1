import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers:any={token:localStorage.getItem("token")}
  constructor(private _HttpClient:HttpClient ,private _router:Router) { }


  addProudectToCart(proudectid:string):Observable<any>{
    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        "productId": proudectid
      }
    )
  }


  getusercart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`)
  }




  deleteProudect(proudectid:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${proudectid}`)
  }


  updateDataCount(proudectid:string ,newquantity:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${proudectid}`,
    {
      count: newquantity
    }
    )
  }

  checkout(cardId:string,userdata:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
    {
    shippingAddress:userdata
    })
  }

}
