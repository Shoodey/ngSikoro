var Interfaces;
(function (Interfaces) {
    var Person = (function () {
        // Constructor for Person class
        function Person(options) {
            this._options = options;
            this.money = 0;
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
        return Person;
    }());
    var person = new Person({
        firstName: "Mark",
        lastName: "Zuckerberg",
        age: 34
    });
    console.log(person);
})(Interfaces || (Interfaces = {}));
