import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './website/components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './website/components/educacion/new-educacion/new-educacion.component';
import { EditExpComponent } from './website/components/experiencia/edit-exp/edit-exp.component';
import { NewExperienciaComponent } from './website/components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './website/components/home/home.component';
import { LoginComponent } from './website/components/login/login.component';
import { EditMeComponent } from './website/components/me/edit-me/edit-me.component';
import { EditProyectoComponent } from './website/components/proyectos/edit-proyecto/edit-proyecto.component';
import { EditSkillComponent } from './website/components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './website/components/skills/new-skill/new-skill.component';
import { NewProyectoComponent } from './website/components/proyectos/new-proyecto/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editacercade/:id', component: EditMeComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
