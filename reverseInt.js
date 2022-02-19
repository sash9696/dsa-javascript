function reverseInt(num){
    let new_str = ""
   
    let str = num.toString()
    console.log(str)
    new_str = str.split('').reverse().join('')
    
    num < 0 ? console.log(-parseInt(new_str)) : console.log(parseInt(new_str))
    // if (num < 0){
    //     console.log(-parseInt(new_str))
    //or console.log(parseInt(new_str) * -1)
    // }
    // else{
    //     console.log(parseInt(new_str))
    // }
    
}
reverseInt(-21) //Big O(logn base 10) because if input increase by factor 10,
                //we do only one more operation