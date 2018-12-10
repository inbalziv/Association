import { Component, OnInit } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adoption-temporary',
  templateUrl: './adoption-temporary.component.html',
  styleUrls: ['./adoption-temporary.component.css']
})
export class AdoptionTemporaryComponent implements OnInit {
  model;
  selectedDate;

  constructor() { }

  ngOnInit() {
  }
  submitForm() {
    alert("submitted");
  }

}
