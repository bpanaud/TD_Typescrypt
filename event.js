"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(name, description, effect) {
        this.name = name;
        this.description = description;
        this.effect = effect;
    }
    Event.prototype.applyEvent = function (car) {
        console.log("\u00C9v\u00E9nement : ".concat(car.brand, " ").concat(car.model, " : ").concat(this.description));
        switch (this.effect) {
            case 'accident':
                car.broken = true;
                console.log("".concat(car.brand, " ").concat(car.model, " a eu un accident !"));
                break;
            case 'flat tire':
                car.flatTire = true;
                car.speed = 0;
                console.log("".concat(car.brand, " ").concat(car.model, " a un pneu crev\u00E9 !"));
                break;
            case 'repair':
                car.repair();
                break;
        }
    };
    return Event;
}());
exports.Event = Event;
