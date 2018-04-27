let _ = require('lodash');

let dragons = []
dragons.push({name : 'fluffikins',element : 'lightning'});
dragons.push({name : 'noomi',element : 'lightning'});
dragons.push({name : 'karo',element : 'fire'});
dragons.push({name : 'doomer',element : 'timewarp'});


console.log(dragons);

let hasElement = _.curry(function(element,obj){
    return obj.element === element;
});

let dragon = (name,size,element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

    console.log(dragon('fluffikins','tiny','lightning'));

    let lightningdragons = dragons.filter(hasElement('lightning'));
    console.log('filtered dragons',lightningdragons);


    let currydragon = _.curry(dragon);
      /*  name =>
            size =>
                element =>
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'; */

                console.log(currydragon('fluffykins')('tiny')('lightning'));