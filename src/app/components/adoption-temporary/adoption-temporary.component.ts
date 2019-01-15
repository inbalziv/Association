import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-adoption-temporary',
  templateUrl: './adoption-temporary.component.html',
  styleUrls: ['./adoption-temporary.component.css']
})
export class AdoptionTemporaryComponent implements OnInit {
  formGroup: FormGroup;
  novalidate: boolean = true;
  firstName: string;
  displayError: string = "none";
  hideElement: true;
  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ])
    });
  }
  submitForm() {
    if (this.firstName === "") {
      this.displayError = "inline";
    }
    alert("submitted");
  }

}
