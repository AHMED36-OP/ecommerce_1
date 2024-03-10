import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/servicers/cart.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.scss']
})
export class ChekoutComponent implements OnInit{
  constructor(
    private _FormBuilder:FormBuilder,
    private _ActivatedRoute:ActivatedRoute,
    private _CartService:CartService
    ){}

  checkout:FormGroup =this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })

  cartid:any=''
  detials:any={}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parms)=>{
        // console.log(parms.get('idcart'));
        this.cartid=parms.get('idcart');
      }
    })
}
  handleform():void{
    console.log(this.checkout.value);
    this.detials=this.checkout.value;
    this._CartService.checkout(this.cartid ,this.checkout.value).subscribe({
      next:(responsefromcheckout)=>{
        console.log(responsefromcheckout);

        if(responsefromcheckout.status =="success"){
          // _self  يعني يفتح في نفس الصفحة مش صفحة جديدة
          window.open(responsefromcheckout.session.url, '_self')
        }
      }
    })
  }
}
