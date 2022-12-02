/////////////////ADD TO ZERO//////////////////////////

function addToZero(arrOfNums) {
    let result = false;
for (let i = 0; i < arrOfNums.length; i++) {
  for (let j = 0; j < arrOfNums.length; j++) {
    if (i !== j) {
      if (arrOfNums[i] + arrOfNums[j] === 0) {
        result = true;
      } 
    }
  }
}
return result
}

// Time complexity: O(n^2)
// Space complexity: O(n^2)


////////////////UNIQUE CHARACTERS//////////////////////

function hasUniqueChars(str) {
    let newStr = ''
    let unique = true
    for (let i = 0; i < str.length; i++) {
        if (newStr.includes(str[i]) === false) {
            newStr = newStr + str[i]
        } else {
            unique = false
        }
    }
    return unique
}

// Time complexity: O(n)
// Space complexity:O(n^2)

////////////////PANGRAM SENTENCE///////////////////////

function isPangram(str) {
    let strLower = str.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letters.length; i++) {
      if(strLower.indexOf(letters[i]) < 0){
        return false;
      }
    }
    return true;
  }

  // Time complexity: O(n)
  // Space complexity: O(n)

  //////////////////LONGEST WORD//////////////////////

  function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

  // Time complexity: O(n)
  // Space complexity: O(n)