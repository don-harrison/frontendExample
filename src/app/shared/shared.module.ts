import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialExampleModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataTableComponent,
    FormModalComponent,
    HeaderComponent,
    FooterComponent,
    DragAndDropComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    DataTableComponent,
    FormModalComponent,
    HeaderComponent,
    FooterComponent,
    DragAndDropComponent
  ]
})
export class SharedModule { }
