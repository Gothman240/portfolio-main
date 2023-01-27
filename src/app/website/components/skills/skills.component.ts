import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    AOS.init({disable: window.innerWidth <800});
    this.cargarSkills();
    if(this.token.getToken()){
      this.isLogged=true;
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

  cargarSkills():void{
    this.skillServ.lista().subscribe(data=>{
      this.skill = data;
    })
  }

  delete(id:number){
    if(id!=undefined){
      this.skillServ.delete(id).subscribe(data=>{
        this.showInfo();
        this.cargarSkills();
      },err =>{
        this.showError();
        this.router.navigate(['']);
      })
    }
  }

}
