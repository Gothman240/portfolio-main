import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-edit-redes',
  templateUrl: './edit-redes.component.html',
  styleUrls: ['./edit-redes.component.css'],
})
export class EditRedesComponent implements OnInit {
  red: Redes = null;

  constructor(
    private Sredes: RedesService,
    private actiRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actiRouter.snapshot.params['id'];
    this.Sredes.detail(id).subscribe(data =>{
      this.red=data;
    },err =>{
      alert("Error al modifical la red social");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.actiRouter.snapshot.params['id'];
    this.Sredes.update(id, this.red).subscribe(()=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar la red social");
      this.router.navigate(['']);
    })
  }
}
