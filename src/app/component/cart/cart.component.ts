import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/servicers/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _HttpClient:HttpClient ,private _CartService:CartService){}
  cartdetials:any={};
  removecartitem(id:string):void{
    this._CartService.deleteProudect(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartdetials=res.data
      },

      error:(err)=>{
        console.log(err);

      }
    })
  }


  changecount(id:string ,quant:number){
    if(quant>0){
      this._CartService.updateDataCount(id,quant).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.cartdetials =res.data
      },
      error:(err)=>{
        console.log(err);

      }
    })
    }
  }

  ngOnInit(): void {
      this._CartService.getusercart().subscribe({
        next:(responsecart)=>{
          console.log(responsecart);
          this.cartdetials=responsecart.data; //{totalcartprice ,proudects[{count ,price ,proudec{}}]}
        },
        error:(erorrrr)=>{
          console.log(erorrrr);
        }
      })
  }
}
