var canPlaceFlowers = function(flowerbed, n) {
  let numOfPlantableFlowers = 0
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      numOfPlantableFlowers++;
      i++;
    }else if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      numOfPlantableFlowers++;
      i++;
    }else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed.length > 2) {
      numOfPlantableFlowers++;
    }
  }
  if (n <= numOfPlantableFlowers) {
    return true;
  } else {
    return false;
  }
};

console.log(canPlaceFlowers([0,0,0,0], 3));
/*
[1,0,*,0,*,0,1]

[1,0,0,0,0,0,0,1]
Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/