const matriz = [
    [1,2,3],
    [4,5,6,[1,2,[1,2]]],
    [7,8,9]
];


const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);   
    } 
}
const rta = matriz.flat(3);

console.log('for',newArray);
console.log('rta',rta);

const rta2 = myFlat(matriz);
console.log('rta2',rta2);

function myFlat(array) {
    let newArray = [];
    if(typeof array != 'object') return [array];
    array.forEach(element => {
        newArray = newArray.concat(myFlat(element));
    });
    return newArray;
}