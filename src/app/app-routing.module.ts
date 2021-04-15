import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleteFormComponent } from './Forms/add-athlete-form/add-athlete-form.component';
import { AllAthletesComponent } from './home/all-athletes/all-athletes.component';
import { CoachViewComponent } from './home/coach-view/coach-view.component';


import { HomepageComponent } from './home/homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { MyhttpComponent } from './myhttp/myhttp.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'coachview', component:CoachViewComponent},
  {path:'add-athlete-form', component:AddAthleteFormComponent},
  {path:'all-athletes', component:AllAthletesComponent},
  {path:'myhttp', component:MyhttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
