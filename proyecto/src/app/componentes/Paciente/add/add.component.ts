import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelos/Paciente';
import { PacienteService } from 'src/app/Service/Paciente/paciente.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  paciente = new Paciente();
  constructor(private router:Router, private service:PacienteService){ }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPaciente(this.paciente)
  .subscribe(data=>{
    alert("Se agregó con exito");
    this.router.navigate(["listar"]);
  })
  }
}
