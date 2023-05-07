


function findMatching(array, name) {
    const matchDrivers = array.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchDrivers;
}

function fuzzyMatch(array, name) {
    const fuzzyDrivers = array.filter(driver => driver[0] === name[0]);
    return fuzzyDrivers;
}


function matchName(object, name) {
    const sameThings = object.filter(things => things.name === name);
        return sameThings;
}

