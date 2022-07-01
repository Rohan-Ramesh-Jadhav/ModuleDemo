import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistorComponent } from './resistor/resistor.component';
import { LoginComponent } from './login/login.component';
import { SharedComponent } from './shared/shared.component';



@NgModule({
  declarations: [
    ResistorComponent,
    LoginComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SigninModule { }
