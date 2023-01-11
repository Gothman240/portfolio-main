import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill [] = [];
  isLogged= false;

  constructor(
    private skillServ: SSkillService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarSkills();
    if(this.token.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarSkills():void{
    this.skillServ.lista().subscribe(data=>{
      this.skill = data;
    })
  }

  delete(id:number){
    if(id!=undefined){
      this.skillServ.delete(id).subscribe(data=>{
        this.cargarSkills();
      },err =>{
        alert("No se pudo borrar la skill");
        this.router.navigate(['']);
      })
    }
  }

}
