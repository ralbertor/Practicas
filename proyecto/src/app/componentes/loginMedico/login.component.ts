import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  })
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginSer: LoginService){
    }
    
  onSubmit():void{
  if(this.form.valid){
  let usuario:Usuario=new Usuario();
  usuario=this.form.value;
   this.loginSer.loginmedico(usuario).subscribe(data =>{
    this.router.navigate(["panel"]);
    },
    error=>{},
    ()=>{})
  
  }
  }
}
