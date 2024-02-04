// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name, string){
    const driver = name.filter(driverName => driverName.toLowerCase() === string.toLowerCase())

    return driver
}

function fuzzyMatch(name, string){
    const driver = name.filter(driverName => driverName.slice(0,2) === string)

    return driver
}

function matchName(driver, string){
    const drivers = driver.filter(driverObject => driverObject.name === string)

    return drivers
}