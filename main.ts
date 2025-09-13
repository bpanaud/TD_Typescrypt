import { Car } from "./car";
import { Game } from "./game";

const game = new Game();

const car1 = new Car("Clio IV", "Renault", "Black", 2017);
const car2 = new Car("A5", "Audi", "Grey", 2020);
const car3 = new Car("Roma", "Ferrari", "Red", 2023);
const car4 = new Car("Chiron","Bugatti","Blue",2021)

game.addCar(car1);
game.addCar(car2);
game.addCar(car3);
game.addCar(car4);

game.start();
