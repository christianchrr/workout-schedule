import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/myhttp/athlete.service';


@Component({
  selector: 'app-add-athlete-form',
  templateUrl: './add-athlete-form.component.html',
  styleUrls: ['./add-athlete-form.component.css']
})
export class AddAthleteFormComponent implements OnInit {
  
  athlete = new Athlete('','','','password','Athlete')

  constructor(private http:AthleteService) { }

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

  submit(){
    this.http.addAthlete(this.athlete).subscribe((data:any)=>{
        this.athlete=data;
    })
  }

}
