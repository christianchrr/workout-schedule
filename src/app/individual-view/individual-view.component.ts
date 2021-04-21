import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.css']
})
export class IndividualViewComponent implements OnInit {

  selectedUser:Athlete={email:"",fname:'',lname:"",password:"",role:""};

  constructor(private _user:NavbarService) { }

  ngOnInit(): void {
    this.selectedUser = this._user.getSelectedUser();
  }

}
