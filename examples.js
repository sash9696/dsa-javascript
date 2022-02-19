//Javascript execution
var n = 2;
function square(num){
var ans = num*num;
return ans;
}
var square2 = square(n);
var square4 = square(4);
console.log(square2);
console.log(square4);


// Async Behaviour
function x(){
var i=10;
setTimeout(function () { 
console.log(i);
}, 1000);
console.log("hey");
}
x();


//async example
console.log('start');

setTimeout(function cb(){
    console.log("callback");
}, 4000)

console.log("end");
// -------------------


//Call back functions
function abc(){
    setTimeout(function(){
        console.log("Hi, I am a callback");
    }, 1000)
    
}
function xyz(callback){
    console.log("hello");
    callback();
}
xyz(abc);
// -------------------


setTimeout(function(){
    console.log("Call back set timeout")
},10)


//promises
const API_KEY = "3653c65d49aec32d55c3b5dd49c7b021"
function fetchUrl1(){
    const a = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((data) => data.json() )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
fetchUrl1();
// -------------------


//async await
async function fetchUrl2(){
    try{
        const a = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        const b = await a.json()
        console.log(b)
    }catch(err){console.log(err)}
}
 fetchUrl2();
 // -------------------