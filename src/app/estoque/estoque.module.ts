import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EstoqueRoutingModule } from "./estoque-routing.module";
import { EstoqueComponent } from "./estoque/estoque.component";

import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { PopUpComponent } from "../pop-up/pop-up.component";
import { HomeComponent } from "../home/home.component";
import { UserListComponent } from "../user-list/user-list.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";

@NgModule({
  declarations: [
    EstoqueComponent,
    RegisterComponent,
    LoginComponent,
    PopUpComponent,
    HomeComponent,
    UserListComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EstoqueModule {}
