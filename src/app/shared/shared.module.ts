import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsComponent } from './alerts/alerts.component';
import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe'; 
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [ 
     AlertsComponent,
     CategoryPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AlertsComponent,
    CategoryPipe
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
