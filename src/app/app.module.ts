import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './website/components/nav/nav.component';
import { HeroComponent } from './website/components/hero/hero.component';
import { AboutComponent } from './website/components/about/about.component';
import { ExperienciaComponent } from './website/components/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './website/components/skills/skills.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { MeComponent } from './website/components/me/me.component';
import { HomeComponent } from './website/components/home/home.component';
import { LoginComponent } from './website/components/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './website/components/experiencia/new-experiencia/new-experiencia.component';
import { EditExpComponent } from './website/components/experiencia/edit-exp/edit-exp.component';
import { EducacionComponent } from './website/components/educacion/educacion.component';
import { NewEducacionComponent } from './website/components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './website/components/educacion/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './website/components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './website/components/skills/new-skill/new-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ToastrModule } from 'ngx-toastr';

import { EditMeComponent } from './website/components/me/edit-me/edit-me.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProyectosComponent } from './website/components/proyectos/proyectos.component';
import { NewProyectoComponent } from './website/components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './website/components/proyectos/edit-proyecto/edit-proyecto.component';
import { RedesComponent } from './website/components/redes/redes.component';
import { NewRedesComponent } from './website/components/redes/new-redes/new-redes.component';
import { EditRedesComponent } from './website/components/redes/edit-redes/edit-redes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienciaComponent,
    SkillsComponent,
    FooterComponent,
    MeComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExpComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditMeComponent,
    ProyectosComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    RedesComponent,
    NewRedesComponent,
    EditRedesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut:5000,
      closeButton: false,
      progressBar: true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
