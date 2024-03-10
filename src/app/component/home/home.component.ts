import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Proudect } from 'src/app/interface/proudect';
import { ProudectDataService } from 'src/app/servicers/proudect-data.service';
import { CartService } from 'src/app/servicers/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProudectDataService:ProudectDataService ,
    private _CartService :CartService,
    private _ToastrService:ToastrService
    ){}
  proudects:Proudect[]=[];
  title:[]=[];
  seacrh_text:string="";
  cateugores:any[]=[];

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



  mainslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    // autoplay:true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }
  catgoriesSliderOpation: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  ngOnInit(): void {
      this._ProudectDataService.getallproudect().subscribe(
        {
          next:(response)=>{
            // console.log(response);
            this.proudects=response.data;
            this.title=response.data.title
          }
        }
      )

      this._ProudectDataService.getcategory().subscribe({
        next:(catogery)=>{
          // console.log(catogery);
          this.cateugores=catogery.data
        }
      })


  }

}

