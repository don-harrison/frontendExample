import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
