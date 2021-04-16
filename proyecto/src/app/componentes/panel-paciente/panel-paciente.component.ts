import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CitaService } from 'src/app/Service/Cita/cita.service';

@Component({
  selector: 'app-panel-paciente',
  templateUrl: './panel-paciente.component.html',
  styleUrls: ['./panel-paciente.component.css']
})
export class PanelPacienteComponent implements OnInit {

  citas:Cita[];
  id:number;
  constructor(private service:CitaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.id=+params['id']})
  }
  EditarPaciente():void{
    console.log(this.id)
    this.router.navigate(['/edit',this.id]);
  }
  Editar(cita:Cita):void{
    localStorage.setItem("id",cita.id.toString());
    this.router.navigate(["edit"]);
  }
  Delete(cita:Cita){
    this.service.deleteCita(cita).subscribe(data=>{
      this.citas=this.citas.filter(p=>p!==cita);
      alert("Cita eliminada");
      this.router.navigate(["listar"]);
    })
}
}
