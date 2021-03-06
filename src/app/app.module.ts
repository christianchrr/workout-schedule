import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AddWorkoutFormComponent } from './Forms/add-workout-form/add-workout-form.component';
import { AddAthleteFormComponent } from './Forms/add-athlete-form/add-athlete-form.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';

import { AllAthletesComponent } from './home/all-athletes/all-athletes.component';

import { ProfileViewComponent } from './profile-view/profile-view.component';
import { WeeklyCalendarComponent } from './home/weekly-calendar/weekly-calendar.component';

import { HttpClientModule } from '@angular/common/http';
import { WorkoutViewComponent } from './home/workout-view/workout-view.component';
import { MyhttpComponent } from './services/myhttp.component';
import { LoginComponent } from './login/login.component';
import { NavbarService } from './services/navbar.service';
import { IndividualViewComponent } from './individual-view/individual-view.component';
import { AddCompleteWorkoutFormComponent } from './add-complete-workout-form/add-complete-workout-form.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ForgotPWComponent } from './Forms/forgot-pw/forgot-pw.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AddWorkoutFormComponent,
    AddAthleteFormComponent,
    LoginComponent,
    AllAthletesComponent,
    MyhttpComponent,
    ProfileViewComponent,
    WeeklyCalendarComponent,
    WorkoutViewComponent,
    IndividualViewComponent,
    AddCompleteWorkoutFormComponent,
    ForgotPWComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MaterialFileInputModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
