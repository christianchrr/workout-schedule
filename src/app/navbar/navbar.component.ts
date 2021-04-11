import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logged:any;
  constructor(private navigation:NavbarService) { 
  
  }

  ngOnInit(): void {
  }
  
 

}
