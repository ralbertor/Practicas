import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Cita } from 'src/app/modelos/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/citas';
  UrlAdd='http://localhost:8080/citas/add';
  UrlId='http://localhost:8080/citas/{id}';
  UrlUpdate='http://localhost:8080/citas/update';
  UrlDelete='http://localhost:8080/citas/delete';

  getCitas(){
    return this.http.get<Cita[]>(this.Url);
  }
  createCita(cita:Cita){
    console.log(cita);
    return this.http.post<Cita>(this.UrlAdd,cita)
  }
  getCitaeId(id:number){
    return this.http.get<Cita>(this.Url+"/"+id);
  }
  updateCita(cita:Cita){
    return this.http.put<Cita>(this.UrlUpdate,cita);
  }
  deleteCita(cita:Cita){
    return this.http.delete<Cita>(this.UrlDelete+"/"+cita.id,this.httpOptions);
  }
}