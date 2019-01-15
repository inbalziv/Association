export interface IAnimal {
  id: string;
  name: string;
  age: number;
  gender: 'female' | 'male';
  type: 'cat' | 'dog';
  custodyDate: Date[];
  image: string;
}
