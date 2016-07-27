var nombre = 44;
var people = [
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
];
function isEven(n, callback) {
    var even = n % 2 === 0;
    console.log(callback(even));
}
isEven(nombre, function (even) {
    var response = "is " + nombre + " even ? " + even;
    return response;
});
function respect(people) {
    var output = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.gender === "m") {
            output.push("M. " + person.name);
        }
        else if (person.gender === "f") {
            output.push("Mme. " + person.name);
        }
    }
    return output;
}
function sayHi(people) {
    for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
        var person = people_2[_i];
        console.log("Bonjour " + person);
    }
}
sayHi(respect(people));
