import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/modelos/Paciente';
import { Usuario } from 'src/app/modelos/Usuario';
import { PacienteService } from 'src/app/Service/Paciente/paciente.service';
;


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  paciente: Paciente = new Paciente();
  id:number;
  constructor(private router: Router, private service: PacienteService, private route:ActivatedRoute) { }

  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    nss: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    numTarjeta: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.route.params.subscribe(params=>{this.id=+params['id']})
    this.form.patchValue({usuario: this.paciente.usuario,
    clave: this.paciente.clave,
    nombre: this.paciente.nombre,
    apellidos: this.paciente.apellidos,
    nss: this.paciente.nss,
    direccion: this.paciente.direccion,
    numTarjeta: this.paciente.numTarjeta,
    telefono: this.paciente.telefono})
  }
  Editar() {
    this.service.getPacienteId(this.id).subscribe(data => {
      this.paciente = data;
      console.log(data)
      console.log(this.paciente)
    })

  }
  Actualizar() {
    if (this.form.valid) {
      let paciente: Paciente = new Paciente();
      paciente = this.form.value;
      this.service.updatePaciente(paciente)
        .subscribe(data => {
          this.paciente = data;
          alert("se actualizó con exito");
          this.router.navigate(["panelPaciente"]);
        })
    }

  }
}
