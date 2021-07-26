import { Car } from './Car';
import { MakeTypes } from './MakeTypes';

export class Ute extends Car {
  capacity: number;

  constructor(
    _speed: number,
    _rego: string,
    _make: MakeTypes,
    _capacity: number
  ) {
    super(_speed, _rego, _make);
    this.capacity = _capacity;
  }
}
