import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from 'src/app/modelos/Medico';
import { Usuario } from 'src/app/modelos/Usuario';
import { RegisterService } from 'src/app/Service/register/register.service';
import { UsuarioService } from 'src/app/Service/Usuario/Usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
    numColegiado:new FormControl('', [Validators.required]),
    nombre:new FormControl('', [Validators.required]),
    apellidos:new FormControl('', [Validators.required]),
  })
  usuario:Usuario;
  clave:String;
  confirClave:String;

  constructor(public registerService:RegisterService, private router:Router) { }

  onSubmit(){
    if(this.form.valid){
      let medico:Medico=new Medico();
      medico=this.form.value;
    this.registerService.registermedico(medico).subscribe(data => {
      console.log(data);
      this.router.navigate(["panel"]);
    });
  }
  }
}
