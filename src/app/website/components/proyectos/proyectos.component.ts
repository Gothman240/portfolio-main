import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyectos';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto [] = [];
  isLogged = false; 

  constructor(public proyectService: SProyectoService,
    private token: TokenService){}

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.token.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarProyectos():void{
    this.proyectService.lista().subscribe( data =>{
      this.proyecto = data;
    })
  }
  
  delete(id?: number){
    if(id != undefined){
      this.proyectService.delete(id).subscribe(() => {
        this.cargarProyectos();
      })
    }
  }
}
