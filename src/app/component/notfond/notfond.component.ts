import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfond',
  templateUrl: './notfond.component.html',
  styleUrls: ['./notfond.component.scss']
})
export class NotfondComponent {
  constructor(private _router:Router){}
  navicateBack(){
    this._router.navigate(['home'])
  }
}
