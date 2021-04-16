import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelos/Paciente';
import { PacienteService } from 'src/app/Service/Paciente/paciente.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  
  pacientes:Paciente[];
  constructor(private service:PacienteService, private router:Router) { }

  ngOnInit(): void {
  }
  Editar(paciente:Paciente):void{
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
