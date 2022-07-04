import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DataTableComponent,
    FormModalComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    DataTableComponent,
    FormModalComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
