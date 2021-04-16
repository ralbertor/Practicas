import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/modelos/Medico';
import { Usuario } from 'src/app/modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
 
  /*getToken(){
    return this,this.cookies.get("token")
  }
  setToken(token:String){
    this.cookies.set("token", token);
  }*/
}
