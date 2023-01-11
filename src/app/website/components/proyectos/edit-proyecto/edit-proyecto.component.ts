import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';
import { ImgProyectoService } from 'src/app/service/img-proyecto.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{

  proyecto: Proyecto = null;

  constructor(private proyectoServce:SProyectoService,
    private actiRouter:ActivatedRoute,
    private router:Router,
    public imgProyect:ImgProyectoService){}

  ngOnInit(): void {
    this.imgProyect.url = "";
    const id = this.actiRouter.snapshot.params['id'];
    this.proyectoServce.detail(id).subscribe(data =>{
      this.proyecto = data;
    }, err =>{
      alert("Error al actualizar");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.actiRouter.snapshot.params['id'];
    if(!(this.imgProyect.url == "")){
      this.proyecto.imgP = this.imgProyect.url;
    }this.proyectoServce.update(id, this.proyecto).subscribe(()=>{
      this.router.navigate(['']);
    },err =>{
      alert("Error al actualizar");
      this.router.navigate(['']);
    })
  }


  uploadImg($event:any){
    if($event.target.files[0] == null){
      this.imgProyect.url = this.proyecto.imgP;
    }else {
      const name = "proyecto_" + this.proyecto.nombre;
      this.imgProyect.uploadImg($event, name);
    }
  }
}
