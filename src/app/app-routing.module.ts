import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { HomeComponent } from './home/home.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'customers', component: CustomersPageComponent},
  { path: 'inventory', component: InventoryPageComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'sign-in', component: SignInPageComponent},
  { path: 'overview', component: OverviewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
