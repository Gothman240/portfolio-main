import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = [];

  constructor(
    private expSev: SExperienciaService,
    private tokenS: TokenService,
    private toastr: ToastrService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    AOS.init({ disable: window.innerWidth < 800 });

    this.cargarExp();

    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  showInfo() {
    this.toastr.info('Borrada!', 'Experiencia');
  }

  showError(){
    this.toastr.error("Error al borrar", "Educacion");
  }

  cargarExp(): void {
    this.expSev.lista().subscribe((data) => {
      this.exp = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expSev.delete(id).subscribe(() => {
        this.showInfo();
        this.cargarExp();
      }, err=>{
        this.showError();
      });
    }
  }
}
