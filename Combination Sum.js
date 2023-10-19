// console.log(
//   [1, 2, 3, 4, 1].reduce((a, b) => a + b, 0)
// )

const ans = []
var combinationSum = function(candidates, target) {
  const combSum = (combination) => {
    if (combination.reduce((a, b) => a + b, 0) === target) ans.push(combination)
    else if (combination.reduce((a, b) => a + b, 0) > target) return
    else {
      for (let i = 0; i < candidates.length; i++) {
        if (combination.reduce((a, b) => a + b, 0) + candidates[i] <= target) {
          combination.push(candidates[i])
          combSum(combination)
        }
      }
    }
  };
  combSum([]);
  return ans;
};

console.log(
  combinationSum([2,3,5], 8)
);
// 2,3,5

// 2
// 