import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  url =  environment.url + 'personas/';


  constructor(private http: HttpClient) { }

  public lista():Observable<persona[]> {
    return this.http.get<persona[]> (this.url + 'lista');
  }

  public detail(id: number):Observable<persona>{
    return this.http.get<persona>(this.url + `detail/${id}`);
  }

  /*public save(educacion: Educacion):Observable<any>{
    return this.htpp.post<any>(this.url + 'create', educacion);
  }*/

  public update(id: number,persona:persona):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, persona);
  }

  /*public delete(id:number):Observable<any>{
    return this.htpp.delete<any>(this.url + `delete/${id}`);
  }*/
  

  
}
