import { Injectable } from '@angular/core';
import {IAnimal} from '../interfaces/ianimal';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {A} from "@angular/cdk/keycodes";



@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  animals: IAnimal[];
 // results: Object[];
  baseDomain: string = 'http://localhost:57452/api/data/';
  httpOptions = {
    headers: new HttpHeaders({
     // 'Contnt-Type': 'application/json',
      // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      // 'Host': 'http://localhost:57452'
    // 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
     'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    })
  };



  constructor(private _http: HttpClient) {
  //  this.results = [];
  //   this.animals = [
  //     {
  //       id: "1",
  //       name: 'name1',
  //       age: 4,
  //       gender: 'female',
  //       type: 'dog',
  //       custodyDate: new Date("December 5 2018 12:30"),
  //       image: 'https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg'
  // },
  //     {
  //       id: '2',
  //       name: 'name2',
  //       age: 14,
  //       gender: 'male',
  //       type: 'dog',
  //       custodyDate: new Date(),
  //       image: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
  //     },
  //     {
  //       id: '3',
  //       name: 'name3',
  //       age: 5,
  //       gender: 'female',
  //       type: 'cat',
  //       custodyDate: new Date("December 5 2018 12:30"),
  //       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'
  //     },
  //     {
  //       id: '4',
  //       name: 'name4',
  //       age: 0.3,
  //       gender: 'female',
  //       type: 'dog',
  //       custodyDate: new Date(),
  //       image: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg'
  //     },
  //     {
  //       id: '5',
  //       name: 'name2',
  //       age: 7,
  //       gender: 'male',
  //       type: 'cat',
  //       custodyDate: new Date("December 7 2018 12:30"),
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlq9AZ3Q0OwO3CW9e8xrYAFu2mXGHTc9joY4GSHIiMTi-qdPFRA'
  //     }
  //   ];
  }
  // public getAnimal(num: string): any {
  //   return this.animals.filter(obj => {
  //     return obj.id === num;
  //   });
  // }

  public getAllAnimals(): Observable<any>{
    return this._http.get<Array<any>>(this.baseDomain + "getAnimals");
    // let apiURL = this.baseDomain + "getAnimals";
    //  const results = this._http.get(apiURL).subscribe(
    // //  // debugger;
    // // //  console.log(res);
    // //   return res;
    // // }
    // );
    // debugger;
    // console.log(results);
     // return this._http.get(apiURL)
     //    .toPromise().then(
     //     (res: any) => {
     //        debugger;
     //        console.log(res);
     //        return res.results.map(item => {
     //          return {
     //            id: item.Aid,
     //            name: item.Name,
     //            age: item.Age,
     //            gender: item.Gender,
     //            type: item.Type,
     //            custodyDate: item.CustodyDate,
     //            image: item.Image
     //        } as IAnimal;
     //        });
     //      }
     //    );


    // let promise = new Promise((resolve, reject) => {
    //   let apiURL = this.baseDomain + "getAnimals";
    //   this._http.get(apiURL)
    //     .toPromise().then(
    //       res => {
    //         this.results = res.json().results.map(item => {
    //           return new IAnimal = {
    //             id: item.Aid,
    //             name: item.Name,
    //             age: item.Age,
    //             gender: item.Gender,
    //             type: item.Type,
    //             custodyDate: item.CustodyDate,
    //             image: item.Image
    //         };
    //         });
    //         resolve();
    //       },
    //       msg => {
    //         reject(msg);
    //       }
    //     );
    // });
    // return promise;
  }

    // response.forEach(item => {
    //     const animal: IAnimal = {
    //       id: item['Aid'],
    //         name: item['Name'],
    //         age: item['Age'].toNumber(),
    //         gender: 'female',
    //         type: 'dog',
    //         custodyDate: item['AdoptionDate'],
    //         image: item['Image']
    //     };
    //       animalsList.push(animal);
    //   });
    // debugger;
    // return animalsList;
 // }


  // public getAllAnimals(): Observable<any> {
  //   //return this.HttpGetRequest(this.baseDomain + "getAnimals");
  //   return this._http.get<Array<any>>(this.baseDomain + "getAnimals");
  // }
  // private HttpGetRequest(apiDomain: string): Observable<any> {
  //   return this._http.get<any>(apiDomain);
  // }
}

//[{"Aid":"1","Name":"Austin","Age":5.0,"Gender":1,"PetType":0,"Image":"https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg","AdoptionDate":["2018-12-14T00:00:00+02:00","2018-12-20T00:00:00+02:00","2018-12-22T00:00:00+02:00"]},{"Aid":"2","Name":"Savannah","Age":2.0,"Gender":0,"PetType":0,"Image":"https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","AdoptionDate":["2018-12-17T00:00:00+02:00"]}]
