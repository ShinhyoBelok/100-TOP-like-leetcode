const numToLetters = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const ans = [];
  const combinations = (pos, str) => {
    if (pos === digits.length) ans.push(str)
    else {
      const letters = numToLetters[digits[pos]]
      for (let i = 0; i < letters.length; i++) {
        const comb = str + letters[i];
        combinations(pos + 1, comb);
      }
    }
  }
  combinations(0, '')
  return ans
};


console.log(letterCombinations("234"));

// post+1, str+letters[i]
// 1, a
// 2, ad
// 3, adg
// 
