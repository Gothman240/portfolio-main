import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  url = environment.url + 'proyectos/';

  constructor(private httpclient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpclient.get<Proyecto[]>( this.url + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpclient.get<Proyecto>(this.url + `detail/${id}`)
  }


  public save(proyecto: Proyecto): Observable<any>{
    return this.httpclient.post<any>(this.url + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpclient.put<any>(this.url + `update/${id}`, proyecto);
  }


  public delete(id: number): Observable<any>{
    return this.httpclient.delete<any>(this.url + `delete/${id}`);
  }
}
