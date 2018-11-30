import { Component, OnInit } from '@angular/core';
import {IAnimal} from '../../interfaces/Ianimal';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: IAnimal[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.animals = [
      {
        id: '1',
        name: 'name1',
        age: 4,
        gender: 'female',
        type: 'dog',
        custodyDate: new Date("December 5 2018 12:30"),
        image: 'https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg'
      },
      {
        id: '2',
        name: 'name2',
        age: 14,
        gender: 'male',
        type: 'dog',
        custodyDate: new Date(),
        image: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
      },
      {
        id: '3',
        name: 'name3',
        age: 5,
        gender: 'female',
        type: 'cat',
        custodyDate: new Date(5/12/18),
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'
      },
      {
        id: '4',
        name: 'name4',
        age: 0.3,
        gender: 'female',
        type: 'dog',
        custodyDate: new Date(),
        image: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg'
      },
      {
        id: '5',
        name: 'name2',
        age: 7,
        gender: 'male',
        type: 'cat',
        custodyDate: new Date(7/12/18),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlq9AZ3Q0OwO3CW9e8xrYAFu2mXGHTc9joY4GSHIiMTi-qdPFRA'
      }
    ];

  }


  ngOnInit() {
  }

  loadAnimal(animalId: string) {
    this.router.navigate(['animal-page',animalId]);

  }
}
