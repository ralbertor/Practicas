import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AddComponent } from './componentes/Paciente/add/add.component';
import { EditComponent } from './componentes/Paciente/edit/edit.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './componentes/Paciente/listar/listar.component';
import { PacienteService } from './Service/Paciente/paciente.service';
import { LoginComponent } from './componentes/loginMedico/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { LoginPacienteComponent } from './componentes/login-paciente/login-paciente.component';
import { RegisterPacienteComponent } from './componentes/register-paciente/register-paciente.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { PanelPacienteComponent } from './componentes/panel-paciente/panel-paciente.component';
import { CitaListarComponent } from './componentes/Cita/cita-listar/cita-listar.component';
import { CitaAddComponent } from './componentes/Cita/cita-add/cita-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    LoginPacienteComponent,
    RegisterPacienteComponent,
    PanelComponent,
    PanelPacienteComponent,
    CitaListarComponent,
    CitaAddComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
