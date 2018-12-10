import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimalsService} from '../../services/animals.service';
import {IAnimal} from '../../interfaces/ianimal';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {
  id: string;
  animal: IAnimal;
  constructor(private route: ActivatedRoute, private animalsService: AnimalsService) {
    this.animal = {
      id: "1",
      name: 'name1',
      age: 4,
      gender: 'female',
      type: 'dog',
      custodyDate: new Date("December 5 2018 12:30"),
      image: 'https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg'
    }
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
    // this.animal = this.animalsService.getAnimal(this.id);
  }
}
