const findTheOldest = function(arr) {
    const ages = arr.map(item => {
        if(item.yearOfDeath === undefined){
            const currentYear = (new Date()).getFullYear();
            return currentYear - item.yearOfBirth;
        }
        return item.yearOfDeath - item.yearOfBirth;
    });
    let sortedAges = ages.sort((a, b) => a - b);
    const oldestAge = sortedAges[sortedAges.length - 1];
    const oldestPerson = arr.map(item => {
        const currentYear = (new Date()).getFullYear();
        if(oldestAge === (item.yearOfDeath - item.yearOfBirth)){
            return item;
        } else if(oldestAge === ( currentYear- item.yearOfBirth)){
            return item;
        }
    })
    for (i = 0; i < oldestPerson.length; i++){
        if (oldestPerson[i] !== undefined){
            return oldestPerson[i];
        } else{
            continue;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
