
var fs =require('fs')
const moment = require('moment')

const todaysdate = moment().format('MMM ddd Do YYYY h:mm:ss a')

console.log(todaysdate)

var animals = [
    { name:"fluffykins",species:"rabbit"},
    { name:"Miralda",species:"cat"},
    { name: "Marmaduke",species:"dog"}
]

let dogs = animals.filter(x => x.species == "dog") //? 

interface IPerson {
    age : number,
    name : string,
    location: string
}

const person :IPerson = {
    age: 30,
    name: 'john',
    location: 'Fl'
};



const nums = [22, 34 ,96,-6, 400] /*? $.slice(0,3) */
console.log(person) 


let output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('|'))
.reduce((customers, line) => {
    
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    })
return customers
}, {})

console.log('output',JSON.stringify(output,null,2));



