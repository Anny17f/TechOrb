function isPalindrome(word){
  const cleanedWord = word.toLowerCase().replace(/\s/g,'');
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

console.log(isPalindrome('level'));

console.log(isPalindrome('energy'));