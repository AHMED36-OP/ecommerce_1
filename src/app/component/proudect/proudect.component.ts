import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proudect } from 'src/app/interface/proudect';
import { CartService } from 'src/app/servicers/cart.service';
import { ProudectDataService } from 'src/app/servicers/proudect-data.service';

@Component({
  selector: 'app-proudect',
  templateUrl: './proudect.component.html',
  styleUrls: ['./proudect.component.scss']
})
export class ProudectComponent {

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
  }
}
