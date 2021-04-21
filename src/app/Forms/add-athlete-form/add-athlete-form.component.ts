import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/services/athlete.service';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-add-athlete-form',
  templateUrl: './add-athlete-form.component.html',
  styleUrls: ['./add-athlete-form.component.css']
})
export class AddAthleteFormComponent implements OnInit {
  
  athlete = new Athlete('','','','password','athlete')

  constructor(private http:AthleteService, private router:Router, private email:EmailService) { }

  ngOnInit(): void {
  }

  firstNameUppercase(value:string) {
    if(value.length > 0) {
      this.athlete.fname=value.charAt(0).toUpperCase()+value.slice(1)
    } else {
      this.athlete.fname = value
    }
  }

  lastNameUppercase(value:string) {
    if(value.length > 0) {
      this.athlete.lname=value.charAt(0).toUpperCase()+value.slice(1)
    } else {
      this.athlete.lname = value
    }
  }

  submitAthlete() {
    this.http.addAthlete(this.athlete).subscribe((data:any)=>{
        this.athlete=data;
        this.email.sendEmail(this.athlete).subscribe(data => {
          this.router.navigate(['all-athletes'])
        })
    })
  }

}
