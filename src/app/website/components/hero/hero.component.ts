import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  persona: persona = null;

  constructor(public Spersona: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.Spersona.detail(1).subscribe(data =>{
      this.persona = data;
    })
  }

}
