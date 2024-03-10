import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){

  }

  erromsg:string=""
  isloadin:boolean=false //spineer is hidden

  loginform:FormGroup =new FormGroup(
    {
      email: new FormControl('',[Validators.required ,Validators.email]),
      password: new FormControl('',[Validators.required ,Validators.pattern(/^\w{6,}$/)]),
    }
  );
  handleForm():void{
    this.isloadin=true// show spinner
    const userData=this.loginform.value;//بخزن ال object اللي عملتوا
    if(this.loginform.valid ==true){ //check valdation
      this._AuthService.login(userData).subscribe({
        next:(response)=>{
          if(response.message === 'success'){
            localStorage.setItem("token",response.token)
            this._AuthService.saveUserData()
            this._Router.navigate(['/home'])
            console.log(response);
            this.isloadin=false
          }
        },
        error:(err)=>{
          // console.log(err);
          this.erromsg= err.error.message
          this.isloadin=false
        }
      })
    }
    else{
      this.loginform.markAllAsTouched()
    }
  }
}
