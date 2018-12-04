import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-option',
  templateUrl: './adoption-option.component.html',
  styleUrls: ['./adoption-option.component.css']
})
export class AdoptionOptionComponent implements OnInit {
  adoptionType = 'NA';
  constructor() { }

  ngOnInit() {
  }
  setAdoptionOption(adoption: string) {
    this.adoptionType = adoption === 'permanently' || 'temporary' ? adoption : 'NA';
    debugger;
  }
}
