import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService ,
    private router: Router
    ){}

  registerForm = this.builder.group({
    id: this.builder.control([''], [Validators.required, Validators.minLength(5)]),
    name: this.builder.control([''], [Validators.required]),
    password: this.builder.control([''], [Validators.required, Validators.minLength(6)]),
    email: this.builder.control([''], [Validators.required, Validators.email])
  })

  register(){
    if(this.registerForm.valid){
      this.service.makeRegister(this.registerForm.value).subscribe(result =>
        {
          this.toastr.success('Usuário registrado com sucesso');
          this.router.navigate(['estoque']);
        });
    } else {
      this.toastr.warning('Por favor digite dados válidos!')
    }
  }
}
