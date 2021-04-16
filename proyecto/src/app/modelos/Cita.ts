import { Diagnostico } from "./Diagnostico";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita{
    id:number;
    motivoCita:String;
    paciente:Paciente;
    fechaHora:Date;
    medico:Medico;
     diagnostico:Diagnostico;
}