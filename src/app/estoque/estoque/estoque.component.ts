import { Component } from '@angular/core';

import { Estoque } from '../models/estoque';

import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from '../../shared/alerts/alerts.component';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})

export class EstoqueComponent{

  estoque$: Observable <Estoque[]>;

  displayedColumns = ['_id','name', 'category'];

  constructor(
    private estoqueServices: ServiçosEstoqueService,
    public dialog: MatDialog){
   
    this.estoque$ = this.estoqueServices.lista().pipe(
      catchError(error => {
        this.handleError()
        return of([])
      })
    ); 
  }

  handleError(){
    this.dialog.open(AlertsComponent, {
      data: 'Erro ao carregar dados!'
    })
  }
}
