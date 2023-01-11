import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  exp: Experiencia[]=  [];

  
  constructor(private expSev: SExperienciaService, private tokenS : TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExp();

    if(this.tokenS.getToken()){
      this.isLogged = true;      
    }else{
      this.isLogged = false;
    }
  }

  cargarExp():void{
    this.expSev.lista().subscribe( data =>{
      this.exp = data;
    })
  }

  delete(id?: number){
    if (id!= undefined) {
      this.expSev.delete(id).subscribe( data => {
        this.cargarExp();
      })
    }
  }

}
