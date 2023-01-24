export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    imgP?: string;
    link?:string;
    gitLink?: string;
  
    constructor(nombre: string, descripcion: string, imgP: string, link: string, gitLink: string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imgP = imgP;
      this.link = link;
      this.gitLink = gitLink;
    }
}