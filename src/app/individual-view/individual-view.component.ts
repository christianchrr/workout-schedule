import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.css']
})
export class IndividualViewComponent implements OnInit {

  @Input() individual: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.individual)
  }

}
