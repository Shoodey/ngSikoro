var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorator(target) {
    console.log("Decorator called on: ", target);
}
function DecoratorParams(param1, param2) {
    return function (target) {
        console.log("DecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
function alter(name) {
    return function (target) {
        return lock(target, name);
    };
}
function lock(target, name) {
    var lockedConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (name != undefined) {
            target.apply(this, [name]);
        }
        else {
            target.apply(this, args);
        }
        Object.freeze(this);
    };
    lockedConstructor.prototype = Object.create(target.prototype);
    lockedConstructor.prototype.constructor = target;
    return lockedConstructor;
}
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person = __decorate([
        lock,
        alter("Simon")
    ], Person);
    return Person;
}());
var mark = new Person("Mark");
mark.name = "Alain"; // We can't alter the name
console.log(mark);
