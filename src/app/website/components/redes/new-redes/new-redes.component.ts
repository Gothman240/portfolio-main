import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private Sredes: RedesService, private router: Router, private toastr:ToastrService){}

  ngOnInit(): void {
    
  }

  showSuccess(){
    this.toastr.success("Agregada!", "Red Social");
  }

  showError(){
    this.toastr.error("Error al borrar!", "Red Social");
  }

  onCreate():void{
    const red = new Redes(this.nombre, this.url, this.iconRedes);
    this.Sredes.save(red).subscribe(() =>{
      this.showSuccess();
      this.router.navigate([""]);
    },err=>{
      this.showError();
    })
  }
}
