import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginC', component:LoginCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
