import { Component, OnInit } from '@angular/core';
import {IAnimal} from '../../interfaces/Ianimal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from '../../services/animals.service';
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: IAnimal[];


  constructor(private route: ActivatedRoute, private router: Router, private animalsService: AnimalsService) {

  }


  async ngOnInit() {
     await this.getAnimals();

   //  response.forEach(animal => this.animals.push(this.convertToAnimals(animal)));
  }
  private async getAnimals()
  {
    debugger;
    const results = await this.animalsService.getAllAnimals().toPromise(); //.then(res => { return res });
    console.log("animals components results: " + results);
    debugger;
  }
  private convertToAnimals(animal: any): IAnimal {
    const date: Date[] = [new Date("December 5 2018 12:30")];  //AdoptionDate
    debugger;
    const newAnimal: IAnimal = {
      id: animal['Aid'],
      name: animal['Name'],
      age: animal['Age'].toNumber(),
      gender: 'female',
      type: 'dog',
      custodyDate: date,
      image: animal['Image']
    };
    return newAnimal;
  }
}
