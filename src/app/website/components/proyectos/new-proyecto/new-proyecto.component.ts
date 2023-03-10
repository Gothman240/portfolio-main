import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';
import { ImgProyectoService } from 'src/app/service/img-proyecto.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{


  nombre: string ="" ;
  descrpcion: string ="";
  link: string ="";
  imgP: string ="";
  gitLink: string ="";

  constructor(private proyectoService: SProyectoService,
    private router: Router,
    private actiRouter: ActivatedRoute,
    public imgProyectoS:ImgProyectoService){}


  ngOnInit(): void {
    this.imgProyectoS.url = "";

  }

  onCreate():void{
    this.imgP = this.imgProyectoS.url;
    const proyecto = new Proyecto(this.nombre, this.descrpcion, this.link, this.imgP, this.gitLink);
    this.proyectoService.save(proyecto).subscribe(()=>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al agregar el proyecto");
    })
  }

  uploadImg($event: any){
    const name = "proyecto_" + this.imgP;
    this.imgProyectoS.uploadImg($event, name);
  }

  /*uploadImg($event:any){
    if($event.target.files[0] == null){
      this.imgProyectoS.url = this.imgP;
    }else {
      const name = "proyecto_" + this.imgP;
      this.imgProyectoS.uploadImg($event, name);
    }
  } */
}
