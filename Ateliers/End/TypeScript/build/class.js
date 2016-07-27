"use strict";
var Person = (function () {
    // Constructor for Person class
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._money = 0;
    }
    Object.defineProperty(Person.prototype, "money", {
        // Getter for private attribute money
        get: function () {
            return this._money;
        },
        // Setter for private attribute money
        set: function (value) {
            if (value >= 0) {
                this._money = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.toString = function () {
        return "Je m'appelle " + this.lastName + " " + this.firstName + ", j'ai " + this.age + " ans. J'ai " + this.money + "$ en banque.";
    };
    return Person;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Person;
