import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/modelos/Medico';
import { Paciente } from 'src/app/modelos/Paciente';
import { Usuario } from 'src/app/modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

loginmedico(usuario: Usuario): Observable<Medico> {
  console.log(usuario);
  return this.http.post<Medico>("http://localhost:8080/medicos/login", usuario);
}
loginPaciente(usuario: Usuario): Observable<Paciente> {
  console.log(usuario);
  return this.http.post<Paciente>("http://localhost:8080/pacientes/login", usuario);
}
}