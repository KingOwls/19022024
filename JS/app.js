const miAuto ={
    color: "rojo",
    marca: "Toyota",
    modelo: "Prius",
}

let marvel = {
    name: 'tony Stark',
    codeName: 'Ironman',
    isAlive: false,
    age: 40,
    coords:{
        lat: 35.056,
        lng: -7.0789
    },
    suit: ['Mark I', 'mmarl V', 'hulkbuster'],
    address: {
        zip: '680004',
        location: 'malibu, california'
    }
}

console.log (marvel);
console.log(marvel['age']);

console.log(marvel.coords);
console.log('latitud ${marvel.coords.lat}');
console.log('latitud ${marvel.coords.lng}');


const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 =[...array1, ...array2];
console.log(array3);

const original = [1,2,3];
const cloned = [...original];
console.log(cloned);

function sum(a, b, c){
    return a+b+c;
}

const numbers = [1,2,3];
const result = sum(...numbers);
console.log(result);