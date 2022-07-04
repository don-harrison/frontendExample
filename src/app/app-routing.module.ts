import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MyGuardGuard } from './guards/my-guard.guard';
import { HomeComponent } from './home/home.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: 'customers', component: CustomersPageComponent, canActivate: [MyGuardGuard]},
  { path: 'inventory', component: InventoryPageComponent, canActivate: [MyGuardGuard]},
  { path: 'products', component: ProductsPageComponent, canActivate: [MyGuardGuard]},
  { path: 'sign-in', component: SignInPageComponent},
  { path: 'overview', component: OverviewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
