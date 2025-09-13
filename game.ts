import { Car } from "./car";
import { Event } from "./event";

export class Game {
  cars: Car[];
  events: Event[];

  constructor() {
    this.cars = [];
    this.events = this.generateEvents();
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }

  generateEvents(): Event[] {
    return [
      new Event('Accident', 'La voiture subit un accident et tombe en panne.', 'accident'),
      new Event('Pneu crevé', 'Un pneu se crève.', 'flat tire'),
      new Event('Réparation', 'Réparation complète de la voiture.', 'repair')
    ];
  }

  triggerRandomEvent(car: Car): void {
    const randomIndex = Math.floor(Math.random() * this.events.length);
    const randomEvent = this.events[randomIndex];
    randomEvent.applyEvent(car);
  }

  playTurn(): void {
    for (let car of this.cars) {
      const kmToDrive = Math.floor(Math.random() * 200) + 50;
      car.drive(kmToDrive);
    }

    console.log('--------------Evènement-----------------');

    for (let car of this.cars) {
      this.triggerRandomEvent(car);
    }

    console.log('------------------Etat------------------');

    for (let car of this.cars) {
      console.log(`${car.brand} ${car.model} a parcouru ${car.distance} km.`);

      if (car.broken) {
        console.log(`${car.brand} ${car.model} : Etat : En panne.`);
      } else if (car.flatTire) {
        console.log(`${car.brand} ${car.model} : Etat : Pneu crevé.`);
      } else {
        console.log(`${car.brand} ${car.model} : Etat : En marche.`);
      }
    }

    console.log('----------------------------------------');
  }

  start(): void {
    let turns = 0;
    let winner: Car | null = null;

    while (this.cars.every(car => car.distance < 1000)) {
      console.log(`Tour ${turns + 1}`);
      
      this.playTurn();
      turns++;

      for (let car of this.cars) {
        if (car.distance >= 1000) {
          winner = car;
          break;
        }
      }

      if (winner) {
        break;
      }

      console.log('----------------------------------------');
    }

    if (winner) {
      console.log(`${winner.brand} ${winner.model} a gagné le jeu !`);
    }
  }
}