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

  nombre: string;
  descrpcion: string;
  link: string;
  imgP: string;

  constructor(private proyectoService: SProyectoService,
    private router: Router,
    private actiRouter: ActivatedRoute,
    public imgProyectoS:ImgProyectoService){}


  ngOnInit(): void {
    this.imgProyectoS.url = "";
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombre, this.descrpcion, this.link, this.imgP);
    this.proyectoService.save(proyecto).subscribe(()=>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al agregar el proyecto");
      this.router.navigate(['']);
    })
  }

  uploadImg($event: any){
    const id = this.actiRouter.snapshot.params['id'];
    const name = "proyecto_" + this.nombre;
    this.imgProyectoS.uploadImg($event, name);
  }
}
