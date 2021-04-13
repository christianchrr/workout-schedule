import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleteFormComponent } from './add-athlete-form/add-athlete-form.component';
import { CoachViewComponent } from './coach-view/coach-view.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginC', component:LoginCComponent},
  {path:'hompage', component:HomepageComponent},
  {path:'coach-view', component:CoachViewComponent},
  {path:'add-athlete-form', component:AddAthleteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
