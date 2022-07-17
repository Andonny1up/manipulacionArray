const items = [1,3,2,3,3,1,10];

const rta = items.reduce((obj,item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] += 1;
    }
    return obj;
},{});

console.log(rta);
//---------------------------
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
];
const arrayLevel = data.map(item => item.level).reduce((obj,item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] += 1;
    }
    return obj;
},{});
console.log(arrayLevel);
//--------------------------------------------
const arrayNumbers = [1,1,2,3,4,5,5,6,6,7,8,9,10,10];

const rtaReto = arrayNumbers.reduce((obj,item)=>{
    if(item <= 5){
        obj['1-5']++;
    }else if(item <= 8){
        obj['6-8']++;
    }else if(item <= 10){
        obj['9-10']++;
    }else{

    }
    return obj;
},{
    '1-5':0,
    '6-8':0,
    '9-10':0,
});
console.log(rtaReto);