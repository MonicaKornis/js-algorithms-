function hasTriplet(array, sum ) {
  array = array.sort();

  for (var i = 0; i < array.length; i++) {
    let first = array[i];
    let second = i+1;
    let third = array.length-1;

    while(second < third) {
      let currentSum = first + array[second] + array[third];
      if(sum === currentSum) {
        console.log(true);
        return true;
      } else if (currentSum < sum ) {
        second++;
      } else {
        third--;
      }
    }
  }
  console.log(false);
  return false;
}

hasTriplet([1,7,3,9,4,1],23);
