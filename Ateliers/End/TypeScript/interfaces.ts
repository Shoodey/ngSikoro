namespace Interfaces {
    interface IPerson {
        firstName: string;
        lastName: string;
        age: number;
    }

    class Person {

        private _options: IPerson;
        private _money:number;

        // Constructor for Person class
        constructor(options: IPerson) {
            this._options = options;
            this.money = 0;
        }

        // Getter for private attribute money
        get money():number {
            return this._money;
        }

        // Setter for private attribute money
        set money(value:number) {
            if (value >= 0) {
                this._money = value;
            }
        }

    }

    let person: Person = new Person({
        firstName: "Mark",
        lastName: "Zuckerberg",
        age: 34
    });

    console.log(person);

}


