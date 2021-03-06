function hasTriplet(array, sum ) {
  array = array.sort((a, b) => a - b);

  for (var i = 0; i < array.length; i++) {
    let first = array[i];
    let second = i+1;
    let third = array.length-1;

    while(second < third) {
      let currentSum = first + array[second] + array[third];
      if(sum === currentSum) {
        return true;
      } else if (currentSum < sum ) {
        second++;
      } else {
        third--;
      }
    }
  }

  return false;
}
