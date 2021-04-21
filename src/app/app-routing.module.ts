import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleteFormComponent } from './Forms/add-athlete-form/add-athlete-form.component';
import { AddWorkoutFormComponent } from './Forms/add-workout-form/add-workout-form.component';
import { AllAthletesComponent } from './home/all-athletes/all-athletes.component';
import { WorkoutViewComponent } from './home/workout-view/workout-view.component';

import { MyhttpComponent } from './services/myhttp.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { IndividualViewComponent } from './individual-view/individual-view.component';
import { AddCompleteWorkoutFormComponent } from './add-complete-workout-form/add-complete-workout-form.component';
import { ForgotPWComponent } from './Forms/forgot-pw/forgot-pw.component';

const routes: Routes = [
  {path:'', redirectTo:'/workout-view', pathMatch:'full'},
  {path:'workout-view', component:WorkoutViewComponent},
  {path:'profile-view', component:ProfileViewComponent},
  {path:'add-athlete-form', component:AddAthleteFormComponent},
  {path:'all-athletes', component:AllAthletesComponent},
  {path:'myhttp', component:MyhttpComponent},
  {path:'add-workout-form', component:AddWorkoutFormComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'individual-view', component:IndividualViewComponent},
  {path:'add-complete-workout-form', component:AddCompleteWorkoutFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
