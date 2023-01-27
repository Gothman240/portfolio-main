import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyectos';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyecto: Proyecto [] = [];
  isLogged = false; 

  constructor(public proyectService: SProyectoService,
    private token: TokenService,
    private toastr: ToastrService){}

  ngOnInit(): void {
    AOS.init({disable: window.innerWidth <800});
    this.cargarProyectos();
    if(this.token.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  showInfo(){
    this.toastr.info("Borrado!", "Proyecto")
  }

  cargarProyectos():void{
    this.proyectService.lista().subscribe( data =>{
      this.proyecto = data;
    })
  }
  
  delete(id?: number){
    if(id != undefined){
      this.proyectService.delete(id).subscribe(() => {
        this.showInfo();
        this.cargarProyectos();
      })
    }
  }
}
