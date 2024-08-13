import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../shared/services/auth.service';
import { Estoque } from '../models/estoque';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
    
  constructor(
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private userService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) private data:Estoque ){

      this.userService.getCategory().subscribe(result => {
        this.categoryList = result;
      });
  }

  categoryList: any;

  estoqueForm = this.builder.group({
    name: [ '' ],
    category: [ '' ],
    brand: [ '' ], 
    quantity: [ 0 ]
  });

  ngOnInit(): void {
    this.estoqueForm.patchValue(this.data);
  }

  onSubmit(){
    if(this.estoqueForm.valid){
      const produto = this.estoqueForm.value;
      const quantidade: number = this.estoqueForm.value.quantity ?? 0;          
        for (let i = 0; i < quantidade; i++) {
          this.service.addProduct(produto).subscribe({
            next: (val: any) => {
              this.toastr.success('Produto adicionado com sucesso');
              if (i === quantidade - 1) {
                this.dialog.close();
              }
            },
            error: (erro: any) => {
              this.toastr.error('Erro');
            }
          });
        }

      }
     
    }
  }

