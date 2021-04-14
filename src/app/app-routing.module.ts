import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachViewComponent } from './home/coach-view/coach-view.component';


import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginC', component:LoginCComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'coachview', component:CoachViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
