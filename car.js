"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// car.ts
var Car = /** @class */ (function () {
    function Car(model, brand, color, year) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.distance = 0;
        this.speed = 100; // Vitesse de départ
        this.broken = false;
        this.flatTire = false;
    }
    Car.prototype.drive = function (km) {
        if (this.broken) {
            console.log("".concat(this.brand, " ").concat(this.model, " est en panne."));
            return;
        }
        if (this.flatTire) {
            this.speed = 0;
            console.log("".concat(this.brand, " ").concat(this.model, " a un pneu crev\u00E9."));
            return;
        }
        this.distance += km;
        console.log("".concat(this.brand, " ").concat(this.model, " parcourt ").concat(km, " km. Total : ").concat(this.distance, " km."));
    };
    Car.prototype.repair = function () {
        if (this.broken) {
            this.broken = false;
            console.log("".concat(this.brand, " ").concat(this.model, " a \u00E9t\u00E9 r\u00E9par\u00E9e."));
        }
        else if (this.flatTire) {
            this.flatTire = false;
            console.log("".concat(this.brand, " ").concat(this.model, " a \u00E9t\u00E9 r\u00E9par\u00E9e."));
        }
        else {
            console.log("".concat(this.brand, " ").concat(this.model, " n'a pas besoin de r\u00E9paration."));
        }
    };
    return Car;
}());
exports.Car = Car;
