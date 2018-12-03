import { Component, OnInit } from '@angular/core';
import {IAnimal} from '../../interfaces/Ianimal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: IAnimal[];

  constructor(private route: ActivatedRoute, private router: Router, private animalsService: AnimalsService) {
    this.animals = this.animalsService.getAllAnimals();
  }


  ngOnInit() {
  }
}
