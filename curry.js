
import _ from 'lodash'
// let dragon = (name, size, element) =>{
//     return name + ' is a ' + size + 'dragon which breathes ' + element
// }

// dragon = _.curry(dragon)
// // console.log(dragon('fluffikins', 'tiny ', 'lightning'))

// // let dragon =
// //  name => size => element =>  
// //     name + ' is a ' + size + ' dragon which breathes ' + element

// console.log(dragon('fluffykins')('tiny')('lightning'))


let dragons = [
    { name: 'fluffykins' , age: 2 ,  element: 'lightning' },
    { name: 'noomi' , age: 3 , element: 'lightning' },
    { name: 'karo' , age: 1 , element: 'fire' },
    { name: 'doomer' , age: 7 ,  element: 'timewarp' },
]

console.log(dragons)

let hasElement = _.curry((element, obj) =>
{
   return obj.element === element
})

let isOlder = (A, B) => A.age - B.age

console.log(isOlder({name: 'noomi', age: 2 }, {name:'fluffikins', age: 3}))

let lightningDragons = dragons.filter(hasElement('fire'))

console.log(lightningDragons)

let sortedbyage = dragons.sort((A , B) => A.age - B.age)

let nums = [5, 4, 9, 5, 1]
console.log(nums)
let sorted = nums.sort()


console.log(sorted)

console.log(sortedbyage)