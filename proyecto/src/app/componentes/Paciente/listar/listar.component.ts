import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelos/Paciente';
import { PacienteService } from 'src/app/Service/Paciente/paciente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pacientes:Paciente[];
  constructor(private service:PacienteService, private router:Router) { }

  ngOnInit(){
    this.service.getPacientes()
    .subscribe(data=>{
      this.pacientes=data;
    })
    console.log(this.pacientes);
  }
    Editar(paciente:Paciente){
      localStorage.setItem("id",paciente.id.toString());
      this.router.navigate(["edit"]);
    }
    Delete(paciente:Paciente){
      this.service.deletePaciente(paciente).subscribe(data=>{
        this.pacientes=this.pacientes.filter(p=>p!==paciente);
        alert("Paciente eliminado");
        this.router.navigate(["listar"]);
      })
    }
}
