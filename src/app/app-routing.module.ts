import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleteFormComponent } from './Forms/add-athlete-form/add-athlete-form.component';
import { CoachViewComponent } from './home/coach-view/coach-view.component';


import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginC', component:LoginCComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'coachview', component:CoachViewComponent},
  {path:'add-athlete-form', component:AddAthleteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
