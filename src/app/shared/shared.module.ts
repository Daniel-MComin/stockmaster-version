import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsComponent } from './alerts/alerts.component';
import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe'; 
import { FormsModule } from '@angular/forms';
import { guardGuard } from './guard/guard.guard';



@NgModule({
  declarations: [ 
     AlertsComponent,
     CategoryPipe
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    AlertsComponent,
    CategoryPipe,
  ]
})
export class SharedModule { }
