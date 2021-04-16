import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/modelos/Medico';
import { Paciente } from 'src/app/modelos/Paciente';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }
  registermedico(medico:Medico) {
    return this.http.post<Medico>("http://localhost:8080/medicos/add", medico);
  }
  registerPaciente(paciente:Paciente){
    return this.http.post<Paciente>('http://localhost:8080/pacientes/add',paciente);
  }
}
