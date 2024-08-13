import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from '../../shared/alerts/alerts.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})

export class EstoqueComponent implements OnInit{

  dataSource!: MatTableDataSource<any>;

  submitted: boolean = false;
  estoque$: Observable <any>;
  
  displayedColumns = ['id','name','brand','category', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private estoqueServices: ServiçosEstoqueService,
    public dialog: MatDialog,
    private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
      this.estoqueServices.lista().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      },
      error: console.log,
    }); 
  }

  handleError(){
    this.dialog.open(AlertsComponent, {
      data: 'Erro ao carregar dados!'
    })
  }

  openAddForm(){
    const dialogRef = this.dialog.open(AddComponent, {
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getProductList();
      },
    });
  }    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    this.estoqueServices.deleteProduct(id).subscribe({
      next: (res) => {
        this.toastr.success('Produto deletado com sucesso!');
        this.getProductList();
      },
      error: (err) => {
        this.toastr.warning('Erro ao deletar produto!')
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
  }

}

  

