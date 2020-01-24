// Code your solution here

function findMatching (drivers, outcome) {
    return drivers.filter(driver =>
        driver.toLowerCase() === outcome.toLowerCase()
)};

function fuzzyMatch (drivers, searchTerm) {
    return drivers.filter(driver =>
        driver.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
)};

function matchName (drivers, searchTerm) {
    return drivers.filter(driver => 
        driver.name === searchTerm
)};

