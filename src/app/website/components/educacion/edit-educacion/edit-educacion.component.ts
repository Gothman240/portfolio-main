import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;


  constructor(
    private eduSev: EducacionService,
    private activRouter: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ){}

  showSuccess(){
    this.toastr.success("Modificada!", "Educacion");
  }

  showError(){
    this.toastr.error("Error!", "Educacion");
  }

  ngOnInit(): void {
    const id = this.activRouter.snapshot.params['id'];
    this.eduSev.detail(id).subscribe(data =>{
      this.educacion = data;
    }, err=>{
      this.showError();
      this.router.navigate([''])
    })
  }


  onUpdate(){
    const id = this.activRouter.snapshot.params['id'];
    this.eduSev.update(id, this.educacion).subscribe(data =>{
      this.showSuccess();
      this.router.navigate(['']);
    },err =>{
      this.showError();
    })
  }
}
