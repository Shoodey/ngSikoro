let nombre: number = 44;

let people: any = [
    {
        "gender": "m",
        "name": "Jean"
    },
    {
        "gender": "f",
        "name": "Pauline"
    },
    {
        "gender": "m",
        "name": "Mark"
    },
]

function isEven(n: number, callback: (boolean) => void): any{
    let even: boolean = n % 2 === 0;
    console.log(callback(even));
}

isEven(nombre, (even: boolean) => {
    let response: string = "is " + nombre + " even ? " + even
    return response;
})

function respect(people: any): any{
    let output: string[] = [];

    for(let person of people){
        if(person.gender === "m"){
            output.push("M. " + person.name)
        }else if(person.gender === "f"){
            output.push("Mme. " + person.name)
        }
    }
    return output;
}

function sayHi(people: any): void{
    for(let person of people){
        console.log("Bonjour " +  person);
    }
}

sayHi(respect(people));
