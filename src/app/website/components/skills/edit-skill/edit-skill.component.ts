import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{

  skill:Skill= null;


  constructor(
    private skillServ: SSkillService,
    private activRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activRoute.snapshot.params['id'];
    this.skillServ.detail(id).subscribe(data =>{
      this.skill = data;
    },err =>{
      alert("Error al modificar la skill");
      this.router.navigate(['']);
    })
    
  }

  onUpdate(){
    const id= this.activRoute.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("Error al actualizar la skill");
      this.router.navigate(['']);
    })
  }

}
