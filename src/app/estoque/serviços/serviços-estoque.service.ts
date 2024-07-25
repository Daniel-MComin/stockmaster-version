import { Injectable, } from '@angular/core';

import { Estoque } from '../models/estoque';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiçosEstoqueService {
  private readonly API = '/assets/estoque.json';

  constructor(private httpClient: HttpClient) {}

  lista() {
    return this.httpClient.get<Estoque[]>(this.API)
    .pipe(
      take(1),
      delay(2000),
      tap(estoques => {console.log(estoques)
      }),
    )
  }
  loadById(id:any){
    return this.httpClient.get(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso:string){
   return this.httpClient.post<Estoque>(this.API, curso).pipe(take(1))
  }
   
}
 