import { Car } from "./car";
import { Game } from "./game";

const game = new Game();

const car1 = new Car("Clio", "Renault", "White", 2024);
const car2 = new Car("308", "Peugeot", "Grey", 2024);
const car3 = new Car("Focus", "Ford", "Red", 2024);

game.addCar(car1);
game.addCar(car2);
game.addCar(car3);

game.start();
