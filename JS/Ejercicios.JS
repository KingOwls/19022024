
const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];

function first(arrayOne, arrayTwo){
    return[...arrayOne, ...arrayTwo]
}

const object1 = {name: 'pepe', edad: '22'};
function second(object){
    const object2 = {...object};
    const edit = "name";
    object2[edit] ="carla";

    return console.log(object, object2);
}

second(object1);

const sumNumber=(...arrayContact) =>{
    let total = 0;
    arrayContact.join().split(",").forEach(n => {total += Number(n)})
    return total;
}
console.log(sumNumber(arrayOne, arrayTwo, 8));

const object2 = {name: "Carlos", apellido: "Aldo"};
const cloneObject= (object1, object2) =>{
    let object ={...object1, ...object2};
    return object;
}
console.log(cloneObject(object1, object2));