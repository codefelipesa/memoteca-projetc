import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './interface-pensamento';
import { Observable } from 'rxjs';

@Injectable({ // Classe injetavel 
  providedIn: 'root' // O valor dele pode ser disponibilizado para toda a aplicação
})
export class ServicePensamentoService {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor( private http : HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)}
 
   
}
