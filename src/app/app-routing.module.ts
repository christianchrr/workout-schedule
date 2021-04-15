import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleteFormComponent } from './Forms/add-athlete-form/add-athlete-form.component';
import { AddWorkoutFormComponent } from './Forms/add-workout-form/add-workout-form.component';
import { AllAthletesComponent } from './home/all-athletes/all-athletes.component';

import { HomepageComponent } from './home/homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { MyhttpComponent } from './myhttp/myhttp.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'profile-view', component:ProfileViewComponent},
  {path:'add-athlete-form', component:AddAthleteFormComponent},
  {path:'all-athletes', component:AllAthletesComponent},
  {path:'myhttp', component:MyhttpComponent},
  {path:'add-workout-form', component:AddWorkoutFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
