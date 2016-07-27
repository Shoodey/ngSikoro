function Decorator(target:Function) {
    console.log("Decorator called on: ", target);
}

function DecoratorParams(param1:number, param2:string) {
    return (target:Function) => {
        console.log("DecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

function alter(name:string):any {
    return (target:Function) => {
        return lock(target, name);
    }
}

function lock(target:Function, name?: string):any {
    let lockedConstructor = function (...args) {
        if(name != undefined){
            target.apply(this, [name]);
        }else{
            target.apply(this, args)
        }
        Object.freeze(this);
    };

    lockedConstructor.prototype = Object.create(target.prototype);
    lockedConstructor.prototype.constructor = target;

    return lockedConstructor;
}

@lock @alter("Simon")
class Person {
    private _name:string;

    constructor(name) {
        this._name = name;
    }

    set name(name:string) {
    this._name = name;
}

    get name():string {
        return this._name
    }
}

let mark:Person = new Person("Mark");
mark.name = "Alain"; // We can't alter the name
console.log(mark);


