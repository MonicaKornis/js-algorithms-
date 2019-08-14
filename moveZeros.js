function moveZeros(array) {
  let i = 0;
  let moves = 0;
  while(moves < array.length-1) {
    if(array[i] === 0) {
      array.push(0);
      array.splice(i,1);
      moves += 1;
    } else {
      i+= 1;
      moves+=1;
    }
  }
  return array;
}

moveZeros([1,2,3,0,0,0,1,0,1,1]);


var moveZeroes = function(digits) {
  let numZeros = 0;

  digits.forEach(x => {
    if(x === 0) numZeros++;
  });

   let i = 0;
   while(i< digits.length) {
    if(digits[i] === 0) {
        digits.splice(i,1);
    } else {
        i++;
    }
  }

 for(let y = numZeros; i >0; i--) {
    digits.push(0);
  }

  return digits;
};
