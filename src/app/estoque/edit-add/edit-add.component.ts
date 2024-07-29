import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrl: './edit-add.component.css'
})
export class EditAddComponent {
    
  constructor(private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: DialogRef<EditAddComponent> ){
  }

  estoqueForm = this.builder.group({
    name: [ '' ],
    category: [ '' ],
    brand: [ '' ], 
  });

  onSubmit(){
    if(this.estoqueForm.valid){
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
