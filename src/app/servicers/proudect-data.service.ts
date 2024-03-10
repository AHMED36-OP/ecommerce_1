import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProudectDataService {

  constructor(private _HttpClient:HttpClient) {}
  getallproudect():Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getDiatesproudect(idfuncation:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${idfuncation}`)
  }
  getcategory():Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getcategorydetials(idcatigores:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${idcatigores}`)
  }
}
