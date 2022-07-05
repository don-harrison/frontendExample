import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CustomersPageModule } from './customers-page/customers-page.module';
import { ProductsPageModule } from './products-page/products-page.module';
import { InventoryPageModule } from './inventory-page/inventory-page.module';
import { OverviewPageModule } from './overview-page/overview-page.module';
import { SignInPageModule } from './sign-in-page/sign-in-page.module';
import { SecurityService } from './services/security.service';
import { ErrorPageModule } from './error-page/error-page.module';
import { DragAndDropComponent } from './shared/drag-and-drop/drag-and-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CustomersPageModule,
    ProductsPageModule,
    InventoryPageModule,
    OverviewPageModule,
    SignInPageModule,
    ErrorPageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
