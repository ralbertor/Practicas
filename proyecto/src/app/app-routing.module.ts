import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DefaultNoAnimationsGlobalConfig } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CitaAddComponent } from './componentes/Cita/cita-add/cita-add.component';
import { CitaListarComponent } from './componentes/Cita/cita-listar/cita-listar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginPacienteComponent } from './componentes/login-paciente/login-paciente.component';
import { LoginComponent } from './componentes/loginMedico/login.component';
import { AddComponent } from './componentes/Paciente/add/add.component';
import { EditComponent } from './componentes/Paciente/edit/edit.component';
import { ListarComponent } from './componentes/Paciente/listar/listar.component';
import { PanelPacienteComponent } from './componentes/panel-paciente/panel-paciente.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RegisterPacienteComponent } from './componentes/register-paciente/register-paciente.component';
import { RegisterComponent } from './componentes/register/register.component';


const routes: Routes = [
  {path:"loginMedico",component:LoginComponent,pathMatch:"full"},
  {path:"registerMedico",component:RegisterComponent, pathMatch:"full"},
  {path:"loginPaciente",component:LoginPacienteComponent,pathMatch:"full"},
  {path:"registerPaciente",component:RegisterPacienteComponent,pathMatch:"full"},
  {path:'edit/:id', component:EditComponent},
  {path:"listar",component:ListarComponent, pathMatch:"full"},
  {path:'panelPaciente/:id',component:PanelPacienteComponent},
  {path:"panel",component:PanelComponent, pathMatch:"full"},
  {path:"",component:InicioComponent, pathMatch:"full"},
  {path:"CitaListar",component:CitaListarComponent, pathMatch:"full"},
  {path:"CitaAdd",component:CitaAddComponent, pathMatch:"full"},
  {path:"**",redirectTo: '/', pathMatch:"full"},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
