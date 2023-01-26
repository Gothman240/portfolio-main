export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    iconskill: string;

    constructor(nombre: string, porcentaje: number, iconskill: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.iconskill = iconskill;
    }
}
