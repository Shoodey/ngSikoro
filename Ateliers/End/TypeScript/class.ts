export default class Person {

    public firstName:string;
    public lastName:string;
    public age:number;
    private _money:number;

    // Constructor for Person class
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._money = 0;
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

    toString():string {
        return "Je m'appelle " + this.lastName + " " + this.firstName + ", j'ai " + this.age + " ans. J'ai " + this.money + "$ en banque.";
    }

}
