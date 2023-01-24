import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  url = environment.url + 'redes/';

  constructor(private http: HttpClient) { }

  public lista():Observable<Redes[]>{
    return this.http.get<Redes[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Redes>{
    return this.http.get<Redes>(this.url + `detail/${id}`);
  }

  public save(redes: Redes):Observable<any>{
    return this.http.post<any>(this.url + 'create', redes);
  }

  public update(id: number, redes: Redes):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, redes);
  }

  public detele(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
