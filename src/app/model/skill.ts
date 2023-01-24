export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    iconSkill: string;

    constructor(nombre: string, porcentaje: number, iconSkill: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.iconSkill = iconSkill;
    }
}
