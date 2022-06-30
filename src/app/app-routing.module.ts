import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomeComponent},
  { path: 'sign-in-page', component: SignInPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
