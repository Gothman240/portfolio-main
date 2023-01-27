import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.actiRouter.snapshot.params['id'];
    this.Sredes.detail(id).subscribe(data =>{
      this.red=data;
    },err =>{
      this.showError();
      this.router.navigate(['']);
    })
  }

  showSuccess(){
    this.toastr.success("Editada!", "Red Social");
  }

  showError(){
    this.toastr.error("Error al modificar!", "Red Social");
  }

  onUpdate():void{
    const id = this.actiRouter.snapshot.params['id'];
    this.Sredes.update(id, this.red).subscribe(()=>{
      this.showSuccess();
      this.router.navigate(['']);
    }, err =>{
      this.showError();
      this.router.navigate(['']);
    })
  }
}
