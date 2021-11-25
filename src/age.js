

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime(); /*?*/
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log('my age is', _calculateAge(new Date('12/05/1955')));

console.log('Frances age is', _calculateAge(new Date('10/14/1959')));

console.log('Mums age is', _calculateAge(new Date('10/13/1926')));