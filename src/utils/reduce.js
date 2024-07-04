const numbers = [2,4,6,8];

const user = [
    {
        name:'maria',
        age:25,
    },
    {
        name:'german',
        age:30,
    },
    {
        name:fredy,
        age:35,
    }
]
//en los metodos tradicionale tenemos estos 3 parametros
//numbers.map((num,index,array) =>{})

console.log(numbers.reduce((cv,num,_index) => cv += num));