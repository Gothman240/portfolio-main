import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-new-redes',
  templateUrl: './new-redes.component.html',
  styleUrls: ['./new-redes.component.css']
})
export class NewRedesComponent implements OnInit {

  nombre: string = '';
  url:string = '';
  iconRedes: string = '';

  constructor(private Sredes: RedesService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const red = new Redes(this.nombre, this.url, this.iconRedes);
    this.Sredes.save(red).subscribe(() =>{
      alert("Red social añadida")
      this.router.navigate([""]);
    })
  }
}
