import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.component.html',
  styleUrls: ['./login-paciente.component.css']
})
export class LoginPacienteComponent {
  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  })
  constructor(private loginSer:LoginService, private router:Router) { }

  onSubmit(): void {
    if(this.form.valid){
      let usuario:Usuario=new Usuario();
      usuario=this.form.value;
       this.loginSer.loginPaciente(usuario).subscribe(data =>{
        this.router.navigate(["/panelPaciente", data.id]);
        },
        error=>{},
        ()=>{})
      
      }
      }
  }

