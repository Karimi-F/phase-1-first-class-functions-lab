// Code your solution in this file!
const drivers = ["Antonia","Nuru","Amari","Mo"];
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(2,4);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer){
    function fareMultiplier (fare){
        return fare*integer;
    }
    return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, callback){
    return callback (drivers);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));