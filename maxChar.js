


function maxChar(str){
 
    let charObj = {}
    let maxChar =""
    let count = 0

    
    for(let i=0; i< str.length ; i++){
         const char = str[i]
         
         charObj[char] = charObj[char] + 1 || 1;
        
         if(charObj[char] > count){
             maxChar = char
             count  = charObj[char];
         }
        
    }
    console.log(maxChar)
}

maxChar('I loveee chocolate') //big O(n) time as we visit ecer chr in input string
//big O(1) space as obj will have utmost 26 key value pairs as it depends upon valid letters