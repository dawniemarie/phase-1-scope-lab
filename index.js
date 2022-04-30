var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer = 'reassign me'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'attempting to reassign'
}