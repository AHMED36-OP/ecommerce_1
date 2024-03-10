import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent {
  constructor(private _router:Router){}
  logoutuser():void{
    localStorage.removeItem("token")
    this._router.navigate(["/login"])
  }
}
