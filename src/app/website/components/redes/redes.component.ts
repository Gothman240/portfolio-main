import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
})
export class RedesComponent implements OnInit {
  red: Redes[] = [];
  isLogged = false;

  constructor(
    private Sredes: RedesService,
    private token: TokenService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cargarRedes();

    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  showInfo() {
    this.toastr.info('Borrado!', 'Red Social');
  }

  showError() {
    this.toastr.error('Error al borrar', 'Red Social');
  }

  cargarRedes(): void {
    this.Sredes.lista().subscribe((data) => {
      this.red = data;
    });
  }

  borrarRedes(id: number) {
    if (id != undefined) {
      this.Sredes.detele(id).subscribe(() => {
        this.showInfo();
        this.cargarRedes();
      }, err => {
        this.showError();
      });
    }
  }
}
