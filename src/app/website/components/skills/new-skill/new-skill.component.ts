import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS:string;
  porcentajeS: number;
  color: string;


  constructor(
    private skillServ: SSkillService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const skill = new Skill(this.nombreS, this.porcentajeS, this.color);
    this.skillServ.save(skill).subscribe(data =>{
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir la skill");
      this.router.navigate(['']);
    })
  }
}
