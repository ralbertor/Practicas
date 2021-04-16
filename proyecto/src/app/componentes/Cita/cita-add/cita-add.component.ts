import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CitaService } from 'src/app/Service/Cita/cita.service';

@Component({
  selector: 'app-cita-add',
  templateUrl: './cita-add.component.html',
  styleUrls: ['./cita-add.component.css']
})
export class CitaAddComponent implements OnInit {

  cita = new Cita();
  constructor(private router:Router, private service:CitaService){ }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createCita(this.cita)
  .subscribe(data=>{
    alert("Se agregó con exito");
    this.router.navigate(["CitaListar"]);
  })
  }
}
