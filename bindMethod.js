// bind method
//The bind method bind the function with an object that can
//be later invoked

let name1 = {
    firstName: 'Sahil',
    lastName: 'Chopra'
}
let name2 = {
    firstName: 'Sash',
    lastName: 'rulz'
}
function printFullName(){
    console.log(`${this.firstName} ${this.lastName}`)
}
let printMyName = printFullName.bind(name1)
console.log(printMyName())