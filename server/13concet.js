const elements = [1,1,2,2];
const othresElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othresElements.length; index++) {
    const element = othresElements[index];
    newArray.push(element);
}

const rta = elements.concat(othresElements);
const rta2 = [...elements, ...othresElements];

console.log('for',newArray);
console.log('concat',rta);
console.log('...',rta2);

elements.push(...othresElements);
console.log('elements',elements);