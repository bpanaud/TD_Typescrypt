import { Car } from "./car";

export class Event {
  name: string;
  description: string;
  effect: string;

  constructor(name: string, description: string, effect: string) {
    this.name = name;
    this.description = description;
    this.effect = effect;
  }

  applyEvent(car: Car): void {
    console.log(`Événement : ${car.brand} ${car.model} : ${this.description}`);
    switch (this.effect) {
      case 'accident':
        car.broken = true;
        console.log(`${car.brand} ${car.model} a eu un accident !`);
        break;
      case 'flat tire':
        car.flatTire = true;
        car.speed = 0;
        console.log(`${car.brand} ${car.model} a un pneu crevé !`);
        break;
      case 'repair':
        car.repair();
        break;
    }
  }
}
