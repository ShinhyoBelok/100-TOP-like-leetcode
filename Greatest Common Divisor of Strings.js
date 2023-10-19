var gcdOfStrings = function(str1, str2) {
  // loop the string the get the common divisor for str1 and srt2
  if (str1 + str2 !== str2 + str1) return '';
  const gcds = (a, b) => {
    if (0 === b) {
      return a;
    } else {
      return gcds(b, a % b)
    }
  }
  return str1.substring(0, gcds(str1.length, str2.length));
  // compare the two common divisor and if they are the same we found a GCDS
  // return GCDS
};


// const gcdOfStrings = (str1, str2) => { 
//   if (str1 + str2 !== str2 + str1) return '';
//   const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
//   return str1.substring(0, gcd(str1.length, str2.length));
// };
console.log(gcdOfStrings("AACAAC", "AACAACAACAACAAC"));