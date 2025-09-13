"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var event_1 = require("./event");
var Game = /** @class */ (function () {
    function Game() {
        this.cars = [];
        this.events = this.generateEvents();
    }
    Game.prototype.addCar = function (car) {
        this.cars.push(car);
    };
    Game.prototype.generateEvents = function () {
        return [
            new event_1.Event('Accident', 'La voiture subit un accident et tombe en panne.', 'accident'),
            new event_1.Event('Pneu crevé', 'Un pneu se crève.', 'flat tire'),
            new event_1.Event('Réparation', 'Réparation complète de la voiture.', 'repair')
        ];
    };
    Game.prototype.triggerRandomEvent = function (car) {
        var randomIndex = Math.floor(Math.random() * this.events.length);
        var randomEvent = this.events[randomIndex];
        randomEvent.applyEvent(car);
    };
    Game.prototype.playTurn = function () {
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            var kmToDrive = Math.floor(Math.random() * 200) + 50;
            car.drive(kmToDrive);
        }
        console.log('--------------Evènement-----------------');
        for (var _b = 0, _c = this.cars; _b < _c.length; _b++) {
            var car = _c[_b];
            this.triggerRandomEvent(car);
        }
        console.log('------------------Etat------------------');
        for (var _d = 0, _e = this.cars; _d < _e.length; _d++) {
            var car = _e[_d];
            console.log("".concat(car.brand, " ").concat(car.model, " a parcouru ").concat(car.distance, " km."));
            if (car.broken) {
                console.log("".concat(car.brand, " ").concat(car.model, " : Etat : En panne."));
            }
            else if (car.flatTire) {
                console.log("".concat(car.brand, " ").concat(car.model, " : Etat : Pneu crev\u00E9."));
            }
            else {
                console.log("".concat(car.brand, " ").concat(car.model, " : Etat : En marche."));
            }
        }
        console.log('----------------------------------------');
    };
    Game.prototype.start = function () {
        var turns = 0;
        var winner = null;
        while (this.cars.every(function (car) { return car.distance < 1000; })) {
            console.log("Tour ".concat(turns + 1));
            this.playTurn();
            turns++;
            for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
                var car = _a[_i];
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
            console.log("".concat(winner.brand, " ").concat(winner.model, " a gagn\u00E9 le jeu !"));
        }
    };
    return Game;
}());
exports.Game = Game;
