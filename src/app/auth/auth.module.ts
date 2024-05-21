import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: AuthComponent}])
  ]
})
export class AuthModule { }
