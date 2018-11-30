import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    // this.route.paramMap
    //   .subscribe(id => console.log("id="+id));
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    console.log("id="+this.id);
      console.log("params="+params);
      // In a real app: dispatch action to load the details here.
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
