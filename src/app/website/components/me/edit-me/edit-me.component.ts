import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-me',
  templateUrl: './edit-me.component.html',
  styleUrls: ['./edit-me.component.css']
})
export class EditMeComponent implements OnInit{ 

  persona: persona = null;


  constructor(
    private actiRouter: ActivatedRoute,
    private personaServ: PersonaService,
    private router: Router,
    public imgServ: ImageService
  ){}

  ngOnInit(): void {
    const id =  this.actiRouter.snapshot.params['id'];
    this.personaServ.detail(id).subscribe(data => {
      this.persona = data;
    }, err =>{
      alert("Error al actualizar el Usuario");
      this.router.navigate(['']);
    })
  }


  onUpdate():void{
    const id =  this.actiRouter.snapshot.params['id'];
    this.persona.img = this.imgServ.url;
    this.personaServ.update(id, this.persona).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  uploadImg($event: any){
    const id = this.actiRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgServ.uploadImg($event, name);
  }
}
