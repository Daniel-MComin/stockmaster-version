import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estoque } from '../models/estoque';
import { FormBuilder } from '@angular/forms';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { AuthService } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor( 
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private userService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Estoque){
      this.userService.getCategory().subscribe(result => {
        this.categoryList = result;
      });
  }

  categoryList: any;
  
  ngOnInit(): void {
    this.estoqueForm.patchValue(this.data);
  }


  estoqueForm = this.builder.group({
    name: [ '' ],
    category: [ '' ],
    brand: [ '' ]
  });

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
      }
    }
  }
}
