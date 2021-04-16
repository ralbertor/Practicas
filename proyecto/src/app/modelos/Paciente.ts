import { Cita } from "./Cita";
import { Medico } from "./Medico";

export class Paciente{
    id:number;
    nombre:String;
    apellidos:String;
    usuario:String;
    clave:String;
    nss:String;
    numTarjeta:String;
    telefono:String;
    direccion:String;
    cita:Cita[];
    medico:Medico[];
    constructor(){}
}