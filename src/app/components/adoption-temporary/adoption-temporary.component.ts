import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adoption-temporary',
  templateUrl: './adoption-temporary.component.html',
  styleUrls: ['./adoption-temporary.component.css']
})
export class AdoptionTemporaryComponent implements OnInit {
  pickDate: Date;
  minDate: Date;
  maxDate: Date;
  disabledSubmitButton = false;
  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 21);
  }

  ngOnInit() {
  }
  submitForm() {
    alert("submitted");
  }
}
