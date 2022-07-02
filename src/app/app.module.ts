import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FormsModule } from '@angular/forms';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { SecurityService } from './services/security.service';
import { OverviewPageComponent } from './overview-page/overview-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignInPageComponent,
    HomeContentComponent,
    InventoryPageComponent,
    CustomersPageComponent,
    ProductsPageComponent,
    DataTableComponent,
    FormModalComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
