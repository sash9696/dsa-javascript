// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  //sanitize input strings
//   stringA = stringA.toLowerCase().replace(/[\W_]/g, "")
//   stringB = stringB.toLowerCase().replace(/[\W_]/g, "")
//  if(stringA.length !== stringB.length){
//    return false
//  } 
//   let countObj = {}
//    for(let char of stringA){
//      if(!countObj[char] || char !== "" ){
//        countObj[char] = 1
//      }
//      else{
//       countObj[char] = countObj[char] + 1;
//      }
//    }
//    for( let char of stringB ){
//      if( countObj[char] == undefined || countObj[char] == 0){
//        return false
//      }
//      else{
//        countObj[char] = countObj[char] - 1
//      }
//    }
//    return true //BigO(n+m) Time and bigO(1) space as max 26 pairs in countObj
    stringA = stringA.toLowerCase().replace(/[\W_]/g, "")
    stringB = stringB.toLowerCase().replace(/[\W_]/g, "")
    if(stringA.length !== stringB.length){
      return false
    }
    console.log(stringA.split('').sort())
    if(stringA.split('').sort().join("") ===  stringB.split('').sort().join("")){
       return true
     }else{
       return false
     }
}
console.log(anagrams('heart!', ' earth')) //BigO(nlogn) time due to sorting //BigO(n) space due sorted strings as long as input strings

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
