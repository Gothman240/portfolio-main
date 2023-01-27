import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.activRoute.snapshot.params['id'];
    this.skillServ.detail(id).subscribe(data =>{
      this.skill = data;
    },err =>{
      this.showError("Error al modificar");
      this.router.navigate(['']);
    })
    
  }
  showSuccess(){
    this.toastr.success("Editado!", "Skill");
  }

  showError(mensaje: string){
    this.toastr.error(mensaje, "Skill");
  }

  onUpdate(){
    const id= this.activRoute.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(data =>{
      this.showSuccess();
      this.router.navigate(['']);
    },err =>{
      this.showError("Error al actualizar!");
      this.router.navigate(['']);
    })
  }

}
