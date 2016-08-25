interface IPerson {
    name: string;
    age: number;
    money: number;
}

class Person{
    name: string;
    age: number;
    private _money: number;

    constructor(name: string, age: number, money: number){
        this.name = name;
        this.age = age;
        this._money = money;
    }

    get money(): number{
        return this._money;
    }

    set money(value: number){
        if(value >= 0){
            this._money = value;
        }
    }
    isLegal(): boolean{
        if(this.age >= 18){
            return true;
        }
        return false;
    }

    toString(): string{
        let legal: string;
        if(this.isLegal()){
            legal = "d'age legal";
        }else{
            legal = "mineur";
        }
        return "Je suis " + this.name + ", j'ai " + this.age + ", et j'ai " + this.money +"$ en banque. Je suis " + legal;
    }

} // end of class

let a: IPerson = new Person("Sam", 35, 25000);
a.money = -250;
console.log(a.toString());