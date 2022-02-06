//next greater element 
//Brute Force


function nge(arr){
    
    for(let i = 0; i<arr.length; i++){
        let b = 0;
        for(let j = i; j<arr.length; j++){
            if(arr[j] > arr[i]){ 
                b = arr[j]
                break;
            }
            b = -1

        }
        console.log(b)
        
    }
   
}

let a = [5,4,3,2,1]
console.log(nge(a)) 
//Time - O(N square)






 