import { ProudectDataService } from 'src/app/servicers/proudect-data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proudect } from 'src/app/interface/proudect';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/servicers/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detials',
  templateUrl: './detials.component.html',
  styleUrls: ['./detials.component.scss']
})
export class DetialsComponent implements OnInit {
  dataproudectdetials:Proudect={} as Proudect;
  constructor(private _ActivatedRoute:ActivatedRoute
    ,private _ProudectDataService: ProudectDataService,
    private _CartService:CartService,
    private _ToastrService: ToastrService
    ){}


  addtocart(idproudect:string):void {
  this._CartService.addProudectToCart(idproudect).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message)
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

  detialsslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }
  ngOnInit():void{
    // paramMap ==>شايلا البرامتر اللي مبعوتة في اللينك فوق
    this._ActivatedRoute.paramMap.subscribe({
      next:(prameters)=>{
        let idproudect:any=  prameters.get('idProudect')
        console.log(idproudect);
        this._ProudectDataService.getDiatesproudect(idproudect).subscribe({
          next:(response)=>{
            // console.log(response);
            this.dataproudectdetials =response.data;
          }
        })
      }
    })
  }
}
