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
  // console.log(array);
  return array;
}

moveZeros([1,2,3,0,0,0,1,0,1,1]);
