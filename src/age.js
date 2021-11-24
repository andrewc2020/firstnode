

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime(); /*?*/
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log('my age is', _calculateAge(new Date('05/12/1955')));