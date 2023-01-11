import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  persona: persona = null;
  isLogged=false;

  constructor(
    public personaService: PersonaService,
    private tokenS: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenS.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>{
      this.persona = data;
    })
  }

}
