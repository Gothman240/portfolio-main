import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css'],
})
export class EditExpComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private expSev: SExperienciaService,
    private activRouter: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  showSuccess(){
    this.toastr.success("Editada!", "Experiencia");
  }

  showError(mensaje: string){
    this.toastr.error(mensaje, "Experiencia");
  }

  ngOnInit(): void {
    const id = this.activRouter.snapshot.params['id'];
    this.expSev.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        this.showError("Error al borrar!");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activRouter.snapshot.params['id'];
    this.expSev.update(id, this.expLab).subscribe(
      (data) => {
        this.showSuccess();
        this.router.navigate(['']);
      },
      (err) => {
        this.showError("Error al modificar!");
      }
    );
  }
}
