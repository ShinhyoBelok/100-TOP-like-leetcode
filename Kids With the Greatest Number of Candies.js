var kidsWithCandies = function(candies, extraCandies) {
  //for loop adding the extra to check it with the max value
  const result = []
  const maxValue =  Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxValue) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));