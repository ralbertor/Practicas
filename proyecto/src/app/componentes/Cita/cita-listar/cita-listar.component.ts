import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CitaService } from 'src/app/Service/Cita/cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {

  citas:Cita[];
  constructor(private service:CitaService, private router:Router) { }

  ngOnInit(){
    this.service.getCitas()
    .subscribe((data: Cita[])=>{
      this.citas=data;
    })
    console.log(this.citas);
  }
    Editar(cita:Cita){
      localStorage.setItem("id",cita.id.toString());
      this.router.navigate(["CitaListar"]);
    }
    Delete(cita:Cita){
      this.service.deleteCita(cita).subscribe((data: any)=>{
        this.citas=this.citas.filter((p: any)=>p!==cita);
        alert("Paciente eliminado");
        this.router.navigate(["CitaListar"]);
      })
    }
}

