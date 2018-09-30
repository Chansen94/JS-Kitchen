

let myname = 'Connor'
let no_states = 50

let fiveFour = 5 + 4

let listL = 'L'


// letters after 'l' in name, it tells you to go to the end of the line //
if (myname.charCodeAt(0) > listL.charCodeAt(0)) {
    console.log("Back of the line!")
} else {
    console.log("Next!")
}

function sayHello() {
    return "Hello World!";
}

console.log(sayHello())

function checkAge(name, age) {
    if (age < 21) {
        return "Sorry " + name + ", you aren't old enough to view this page!"
    }
    else {
        return "Come on in " + name +"!"
    }
}

console.log(checkAge('Charles', 21))
console.log(checkAge('Abby', 27))
console.log(checkAge('James', 18))
console.log(checkAge('John', 17))

let veg = ['broccoli', 'asparagus', 'peas', 'romaine', 'carrots']

for (let i = 0; i < veg.length; ++i) {
    console.log((veg[i]))
}

let peoplelist = []
let people = {}
let names = ['Rain', 'Meghann', 'Taylor', 'Lolo', 'Cameron', 'Shelby']
let ages = [23, 55, 24, 3, 26, 22]

for (i = 0; i < names.length; i++) {
    people = {
        pname : names[i], 
        page : ages[i]
    }
    peoplelist.push(people)
}

let m = 0 
while (m < peoplelist.length) {
    console.log(peoplelist[m])
    ++m
}


let n = 0
while (n < peoplelist.length) {
    console.log(checkAge(peoplelist[n].pname, peoplelist[n].page))
    n++
}


function getLength(w) {
    return w.length;
}

whatIsTheWorld = getLength(sayHello)

if ((whatIsTheWorld % 2) == 0) {
    console.log("The world is nice and even.")
} else {
    console.log("The world is an odd place!")
}