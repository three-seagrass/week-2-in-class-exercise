import { MakeTypes } from './MakeTypes';

export class Car {
  speed: number;
  rego: string;
  maxSpeed: number = 120;
  make: MakeTypes;

  constructor(_speed: number, _rego: string, _make: MakeTypes) {
    this.speed = _speed;
    this.rego = _rego;
    this.make = _make;
  }

  increaseSpeed(spd: number): void {
    this.speed += spd;

    // This if statement ensures that the speed of the car doesn't go over the maxSpeed that we have set
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}
