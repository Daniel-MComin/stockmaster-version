import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EstoqueModule } from './estoque/estoque.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { HomeComponent } from './home/home.component';
import { MatTreeModule } from '@angular/material/tree'
import { MaterialModule } from './shared/material/material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    EstoqueModule, 
    ReactiveFormsModule,
    MatTreeModule, 
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
