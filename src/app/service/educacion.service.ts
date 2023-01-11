import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = environment.url + 'educacion/';

  constructor(private http: HttpClient) { }

  public lista():Observable<Educacion[]> {
    return this.http.get<Educacion[]> (this.url + 'lista');
  }

  public detail(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.url + 'create', educacion);
  }

  public update(id: number,educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
