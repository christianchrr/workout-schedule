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
import { AddWorkoutFormComponent } from './WWPage/add-workout-form/add-workout-form.component';
import { AddAthleteFormComponent } from './WWPage/add-athlete-form/add-athlete-form.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { CoachViewComponent } from './home/coach-view/coach-view.component';
import { AthleteViewComponent } from './home/athlete-view/athlete-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AddWorkoutFormComponent,
    AddAthleteFormComponent,
    LoginComponent,

    CoachViewComponent,
    AthleteViewComponent
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
    MatInputModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
