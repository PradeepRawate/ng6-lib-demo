import { Component, OnInit } from '@angular/core';
import { people } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  page = 1;
  constructor() { }

  employees = people;

  ngOnInit() {
    this.employees.forEach( (emp: any, index) => emp.tt = index + 1);
  }


}
