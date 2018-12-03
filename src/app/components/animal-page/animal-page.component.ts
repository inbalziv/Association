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
  constructor(private route: ActivatedRoute, private animalsService: AnimalsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.animal = this.animalsService.getAnimal(this.id);
  }
}
