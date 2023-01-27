import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre:string;
  porcentaje: number;
  iconskill: string;


  constructor(
    private skillServ: SSkillService,
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
    
  }

  showSuccess(){
    this.toastr.success("Agregada!", "Skill");
  }

  showError(){
    this.toastr.error("Error al borrar!", "Skill");
  }

  onCreate():void{
    const skill = new Skill(this.nombre, this.porcentaje, this.iconskill);
    this.skillServ.save(skill).subscribe(data =>{
      this.showSuccess();
      this.router.navigate(['']);
    }, err => {
      this.showError();
      this.router.navigate(['']);
    })
  }
}
