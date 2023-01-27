import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged = false;

  constructor(
    private eduSev: EducacionService,
    private tokenS: TokenService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    AOS.init({disable: window.innerWidth <800});
    this.cargarEducacion();
    if(this.tokenS.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  showInfo(){
    this.toastr.info("Borrado!", "Educacion");
  }

  showError(){
    this.toastr.error("Error al borrar", "Educacion");
  }

  cargarEducacion( ):void{
    this.eduSev.lista().subscribe(data => {
      this.educacion = data;
    })
  }
  
  borrar(id:number){
    if(id != undefined){
      this.eduSev.delete(id).subscribe(data =>{
        this.showInfo();
        this.cargarEducacion();
      },err =>{
        this.showError();
      })
    }
  }

}
