
var fs =require('fs')



var animals = [
    { name:"fluffykins",species:"rabbit"},
    { name:"Miralda",species:"cat"},
    { name: "Marmaduke",species:"dog"}
]

let dogs = animals.filter(x => x.species == "dog")


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



