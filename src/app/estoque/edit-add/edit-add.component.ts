import { CategoryPipe } from './../../shared/pipes/category.pipe';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrl: './edit-add.component.css'
})
export class EditAddComponent implements OnInit{
    
  constructor(private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private userService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<EditAddComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any ){

      this.userService.getCategory().subscribe(result => {
        this.categoryList = result;
      });
  }

  categoryList: any;

  estoqueForm = this.builder.group({
    name: [ '' ],
    category: [ '' ],
    brand: [ '' ], 
    quantity: ['' ]
  });

  ngOnInit(): void {
    this.estoqueForm.patchValue(this.data);
  }

  onSubmit(){
    if(this.estoqueForm.valid){
      if(this.data){
        this.service.updateProduct(this.data.id, this.estoqueForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success('Produto atualizado com sucesso');
            this.dialog.close(true);
          
          },
          error: (erro:any) => {
            this.toastr.error('Erro')
          }
        })
      } else {
        console.log(this.estoqueForm.value)
        this.service.addProduct(this.estoqueForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success('Produto adicionado com sucesso');
            this.dialog.close();
          },
          error: (erro:any) => {
            this.toastr.error('Erro')
          }
        })

      }
     
    }
  }

}
