import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { AthleteService } from '../myhttp/athlete.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(private _user:NavbarService,
              private _update:AthleteService) { }

  user:Athlete={email:"",fname:'',lname:"",password:"",role:""};

      
  email:string=this.user.email;   
  fname:string=this.user.fname; 
  lname:string=this.user.lname; 
  password:string=this.user.password;

  ngOnInit(): void {
    this.user = this._user.getUser()[0];

    this.email=this.user.email;   
    this.fname=this.user.fname; 
    this.lname=this.user.lname; 
    this.password=this.user.password;
  }
      

  update(){
    this.user = {email:this.email,fname:this.fname,lname:this.lname,password:this.password,role:this.user.role}
    console.log(this.user);
    this._update.UpdateUser(this.user).subscribe((data:any)=>{
      this.user=data;
    });
  }



}
