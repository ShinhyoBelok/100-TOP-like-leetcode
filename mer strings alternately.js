var mergeAlternately = function(word1, word2) {
  // get smallest word
  const longestWord = word1.length > word2.length ? word1.length : word2.length;
  let mergeString = '';
  for (let i = 0; i < longestWord; i++) {
    if (word1[i]) {
      mergeString += word1[i];
    } else {
      mergeString += word2.slice(i, word2.length);
      break;
    }

    if (word2[i]) {
      mergeString += word2[i];
    } else {
      mergeString += word1.slice(i + 1, word1.length);
      break;
    }
  }
  // return merdge
  return mergeString;
};

console.log(mergeAlternately("abcd", "pq"));