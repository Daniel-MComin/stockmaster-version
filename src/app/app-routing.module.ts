import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EstoqueComponent } from './estoque/estoque/estoque.component';
import { guardGuard } from './shared/guard/guard.guard';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [guardGuard]},
  { path: 'estoque', component: EstoqueComponent, canActivate: [guardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userlist', component: UserListComponent, canActivate: [guardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
