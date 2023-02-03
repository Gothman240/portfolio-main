export class Experiencia {
    id?: number;
    nombreE : string;
    descripcionE : string;
    duracion?: string;


    constructor(nombreE: string, descripcionE: string,duracion:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.duracion = duracion;
    }
}