var generateParenthesis = function(n) {
  // only add open parenthesis if open < n
  // only add close parenthesis if close < open
  // finish when open == close == n
  const ans = [];
  const parenthesisComb = (open, close, str) => {
    if (open === n && close === n) ans.push(str)
    else {
      if (open < n) {
        str += '(';
        parenthesisComb(open + 1, close, str)
      }
      
      if (close < open) {
        str += ')';
        parenthesisComb(open, close + 1, str)
      }
    }
  };
  parenthesisComb(0,0,'');
  return ans;
};

console.log(generateParenthesis(3));