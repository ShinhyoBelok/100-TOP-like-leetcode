var reverseVowels = function(s) {
  // loop and create an array with all the vowels in the string
  const vowelsDic = ['a', 'e', 'i', 'o', 'u']
  let vowels = []
  const result = []
  for (let i = 0; i < s.length; i++) {
    if (vowelsDic.includes(s[i].toLowerCase())) {
      vowels.push(s[i])
    }
  }
  // loop again chaging the vowels
  let x = 0;
  const length = vowels.length;
  vowels = vowels.join('')
  for (let i = 0; i < s.length; i++) {
    if (vowelsDic.includes(s[i].toLowerCase())) {
      result.push(vowels.slice(length - 1 - x, length - x))
      x++
    } else {
      result.push(s[i])
    }
  }
  // return string
  return result.join('');
};

console.log(reverseVowels("leetcode problem"));