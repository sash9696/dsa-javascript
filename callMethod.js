
//call method i.e. function borrowing
let name1 = {
    firstName: 'Sahil',
    lastName: 'Chopra'
}
let name2 = {
    firstName: 'Sash',
    lastName: 'rulz'
}
function printFullName(age){
    console.log(`${this.firstName}  ${this.lastName}. My age: ${age}`)
}
printFullName.call(name1, 12)
printFullName.call(name2, 12)

//apply method
//It is similar to call method
//The first argument is again reference to this variable
//but the seconf argument is passed as an array list