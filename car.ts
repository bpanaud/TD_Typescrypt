// car.ts
export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  distance: number;
  speed: number;
  broken: boolean;
  flatTire: boolean;

  constructor(model: string, brand: string, color: string, year: number) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.distance = 0;
    this.speed = 100; // Vitesse de départ
    this.broken = false;
    this.flatTire = false;
  }

  drive(km: number): void {
    if (this.broken) {
      console.log(`${this.brand} ${this.model} est en panne.`);
      return;
    }

    if (this.flatTire) {
      this.speed = 0;
      console.log(`${this.brand} ${this.model} a un pneu crevé.`);
      return;
    }
    
    this.distance += km;
    console.log(`${this.brand} ${this.model} parcourt ${km} km. Total : ${this.distance} km.`);
  }

  repair(): void {
    if (this.broken) {
      this.broken = false;
      console.log(`${this.brand} ${this.model} a été réparée.`);
    } else if (this.flatTire) {
      this.flatTire = false;
      console.log(`${this.brand} ${this.model} a été réparée.`);
    } else {
      console.log(`${this.brand} ${this.model} n'a pas besoin de réparation.`);
    }
  }
}
