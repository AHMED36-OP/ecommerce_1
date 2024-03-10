import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detialscatgories } from 'src/app/interface/detialscatgories';
import { ProudectDataService } from 'src/app/servicers/proudect-data.service';

@Component({
  selector: 'app-detials-categoires',
  templateUrl: './detials-categoires.component.html',
  styleUrls: ['./detials-categoires.component.scss']
})
export class DetialsCategoiresComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProudectDataService:ProudectDataService){}
  catigoryid:any;
  catigorydetials:Detialscatgories={} as Detialscatgories
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{

          this.catigoryid=parms.get('idcat');
        }
      })

      this._ProudectDataService.getcategorydetials(this.catigoryid).subscribe({
        next:(res)=>{
          console.log(res.data );
          this.catigorydetials=res.data
        }
      })
  }
}
