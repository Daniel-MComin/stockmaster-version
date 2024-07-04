import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService ,
    private router: Router
    ){}

    userData: any;

    loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    login(){
      if(this.loginForm.valid){
          this.service.getCode(this.loginForm.value.userName).subscribe(result =>
            {
             this.userData = result
             console.log(result)
             if(this.userData.password === this.loginForm.value.password){
                this.router.navigate(['estoque']);
                this.toastr.success('Login realizado com sucesso!')
             } else {
              this.toastr.error('Usuário ou senha incorretos!')
             }
            });
        } else {
          this.toastr.error('Por favor digite dados válidos!')
        }
      }


}
