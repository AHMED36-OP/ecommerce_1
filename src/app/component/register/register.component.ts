import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(private _AuthService:AuthService ,private _Router:Router){

  }

  erromsg:string=""
  isloadin:boolean=false //spineer is hidden

  group:any
  registerForm:FormGroup =new FormGroup(
    {
      name: new FormControl('',
      [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required ,Validators.email]),
      password: new FormControl('',[Validators.required ,Validators.pattern(/^\w{6,20}$/)]),
      rePassword: new FormControl('',[Validators.required ]),
      Phone: new FormControl('',[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    },
    {validators:[this.checkrePassword]} as FormControlOptions
    );



  checkrePassword(group:FormGroup):void{

    let  pass =group.get('password');
    let repass=group.get('rePassword')
    if(repass?.value ==null){
      repass?.setErrors({required:true})
    }else if(pass?.value != repass?.value){
      repass?.setErrors({mismatch:true})
    }
  }

  handleForm():void{
    this.isloadin=true// show spinner
    const userData=this.registerForm.value;//بخزن ال object اللي عملتوا
    if(this.registerForm.valid ==true){ //check valdation
      this._AuthService.register(userData).subscribe({
        next:(response)=>{
          if(response.message === 'success'){
            this._Router.navigate(['/login'])
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
  }
}
