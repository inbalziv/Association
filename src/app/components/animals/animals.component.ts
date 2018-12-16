import { Component, OnInit } from '@angular/core';
import {IAnimal} from '../../interfaces/Ianimal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from '../../services/animals.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: IAnimal[];
  ggg: any;

  constructor(private route: ActivatedRoute, private router: Router, private animalsService: AnimalsService) {

  }


  ngOnInit() {
    const results = this.animalsService.getAllAnimals().subscribe(animals => {console.log(animals); return forEach(animals,
      function(value, key) => {
        let animal: IAnimal = {
          id: value['Aid'],
          name: value['Name'],
          age: value['Age'].toNumber(),
          gender: value['Gender'],
          type: value['PetType'],
          custodyDate: value['jj'],
          image: value['Image']
        };
        this.animals.push(animal);
      })} );
    debugger;
  }
  private convertToAnimals(array: Array<any>) {

  }
}
