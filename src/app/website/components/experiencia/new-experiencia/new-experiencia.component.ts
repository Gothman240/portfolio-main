import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  duracion: string = "";

  constructor(
    private expSev: SExperienciaService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  showSuccess(){
    this.toastr.success("Agrega!", "Experiencia");
  }

  showError(){
    this.toastr.error("Error al añadir", "Experiencia");
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.duracion);
    this.expSev.save(expe).subscribe((data) => {
      this.showSuccess();
      this.router.navigate(['']);
    }, err => {
      this.showError();
    });
  }
}
