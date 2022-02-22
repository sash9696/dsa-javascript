// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"
//str abc
function caesarCipher(str, shift) {
  let arr = "abcdefghijklmnopqrstuvwxyz".split("")
  let res = ""
   for(let i=0; i< str.length; i++){
     const idx = arr.indexOf(str[i])
     if( idx === -1){
       res = res + str[i]; 
       continue
     }
     const encodedIdx = (idx + shift)%26;
     res =  res + arr[encodedIdx]
   }
   return res
   
}
caesarCipher("yz!", 1) 
  //BogO(n) time as we must visit all the char of input string 
  //and BigO(n) space result string length is equal to input string
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

describe("caesarCipher()", () => {
  it("shifts letters correctly.", () => {
    assert.equal(caesarCipher("abcd", 1), "bcde");
    assert.equal(caesarCipher("yz", 1), "za");
    assert.equal(caesarCipher("abcd", 100), "wxyz");
  });
  it("does not shift digits or other characters such as '!'.", () => {
    assert.equal(caesarCipher("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
  });
});

mocha.run();
