var removeDuplicates = (arr) => {
  for(let i = 0; i++; i < arr.length()) {
    let curr = arr[i];
    let next = i+1;

    if(arr[curr] === arr[next]) {
      arr.splice(i,1);
      i = i-1;
    }
  }

  arr.length;
};
