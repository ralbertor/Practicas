import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Paciente } from 'src/app/modelos/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/pacientes';
  UrlAdd='http://localhost:8080/pacientes/add';
  UrlUpdate='http://localhost:8080/pacientes/update';
  UrlDelete='http://localhost:8080/pacientes/delete';

  getPacientes(){
    return this.http.get<Paciente[]>(this.Url);
  }
  createPaciente(paciente:Paciente){
    console.log(paciente);
    return this.http.post<Paciente>(this.UrlAdd,paciente)
  }
  getPacienteId(id:number){
    return this.http.get<Paciente>(this.Url+"/"+id);
  }
  updatePaciente(paciente:Paciente){
    return this.http.put<Paciente>(this.UrlUpdate,paciente);
  }
  deletePaciente(paciente:Paciente){
    return this.http.delete<Paciente>(this.UrlDelete+"/"+paciente.id,this.httpOptions);
  }
}
