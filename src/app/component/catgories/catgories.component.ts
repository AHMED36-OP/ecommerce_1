import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProudectDataService } from 'src/app/servicers/proudect-data.service';

@Component({
  selector: 'app-catgories',
  templateUrl: './catgories.component.html',
  styleUrls: ['./catgories.component.scss']
})
export class CatgoriesComponent implements OnInit {

  constructor(private _ProudectDataService:ProudectDataService){}
  catgoirydata:any[]=[]
  ngOnInit(): void {
      this._ProudectDataService.getcategory().subscribe({
        next:(rescat)=>{
          console.log(rescat.data);
          this.catgoirydata=rescat.data
        }
      })
  }

}
