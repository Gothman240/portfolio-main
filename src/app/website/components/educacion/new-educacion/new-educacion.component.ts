import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{

  nombreE: string;
  descripcionE: string;
  fechaE:string;

  constructor(
    private eduSev: EducacionService,
    private router: Router,
    private toastr: ToastrService){ }

  ngOnInit(): void {
    
  }

  showSuccess(){
    this.toastr.success('Agregado!', 'Nueva Educacion')
  }

  showError(){
    this.toastr.error("Error!", "Educacion")
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.fechaE);
    this.eduSev.save(educacion).subscribe(data =>{
      this.showSuccess();
      this.router.navigate(['']);
    }, err => {
      this.showError();
    })
  }

}
