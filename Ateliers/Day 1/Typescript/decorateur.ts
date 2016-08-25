function Decorateur(cible: Function){
    console.log("Decorateur appelé sur: " + cible);
}

function DecorateurParams(param1: number, param2: string){
    return (cible: Function) => {
        console.log("Decorateur à params appelé sur: " + cible);
        console.log("Param 1: " + param1 + " Param 2: " + param2);
    }
}

function Alter(name: string): any{
    return (cible: Function) => {
        return Lock(cible, name);
    }
}

function Lock(cible: Function, name?: string): any{
    let lockedConstructor = function(...args){
        if(name != undefined){
            cible.apply(this, [name]);
        }else{
            cible.apply(this, args);
        }
        Object.freeze(this);
    }

    return lockedConstructor;
}

@Alter("Simon")
class Person {

    name:string;

    constructor(name:string) {
        this.name = name;
    }
}

let p = new Person("Sam");
p.name = "Dean";
console.log(p);