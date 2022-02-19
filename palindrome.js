
function palindrome (str){

   
    str = str.toLowerCase()
     //return str === str.split('').reverse().join('')
    let  new_str =  str.split("").reverse().join('')
    if(str === new_str){
        return true
    }
    return false
  }
  
  console.log(palindrome("Abac")); //O(n) Time , Space