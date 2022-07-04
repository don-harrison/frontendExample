import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SignInPageModule { }
