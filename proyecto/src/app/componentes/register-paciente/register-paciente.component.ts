import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelos/Paciente';
import { RegisterService } from 'src/app/Service/register/register.service';

@Component({
  selector: 'app-register-paciente',
  templateUrl: './register-paciente.component.html',
  styleUrls: ['./register-paciente.component.css']
})
export class RegisterPacienteComponent{
    form = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
      nombre:new FormControl('', [Validators.required]),
      apellidos:new FormControl('', [Validators.required]), 
      nss:new FormControl('', [Validators.required]),
      numTarjeta:new FormControl('', [Validators.required]),
      telefono:new FormControl('', [Validators.required]),
      direccion:new FormControl('', [Validators.required])
    })
  constructor(public registerService:RegisterService, private router:Router) { }

  onSubmit(){
    if(this.form.valid){
      let paciente:Paciente=new Paciente();
      paciente=this.form.value;
    this.registerService.registerPaciente(paciente).subscribe(data => {
      console.log(data);
      this.router.navigate(["panelPaciente"]);
    });
  }
  }

}
