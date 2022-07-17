const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for',rtaFinal);

const rta = elements.join('--');
console.log('Join',rta);

const title = 'Curso de manipulación de arrays';
const titleFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(titleFinal);


