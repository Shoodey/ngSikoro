let people:any = [
    {
        name: "Sam",
        gender: "m"
    },
    {
        name: "Dean",
        gender: "m"
    },
    {
        name: "Syndra",
        gender: "f"
    }
];
let a: number = 26;
let b: number = 16;

function isPair(a: number, b: number, callback: (boolean) => void): void{
    let sum: number = a + b;
    let parite:boolean =  sum % 2 == 0;

    callback(parite);
}

isPair(a, b, (parite: boolean) => {
    let response = "La somme est paire ? " + parite;
    console.log(response);
})


function sayHi(people:any): string[] {
    let output: string[] = [];
    for (let person of people) {
        if (person.gender == "m") {
            output.push("Mr " + person.name)
        } else {
            output.push("Mme " + person.name)
        }
    }

    return output;
}

// console.log(isPair(a, b));