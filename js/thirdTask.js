function findLongestWord (string = "") {
    // Write code under this line
    let longestWord =" ";
    let word = "";
    for (let i=0; i<string.split(" ").length; i++){
        word = string.split(" ")[i] 
    word.length > longestWord.length ? longestWord = word: "";
    }
return longestWord
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'