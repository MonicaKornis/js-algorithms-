let data = [1,2,3];
let d = 10;

function getResult() {
  let arr = data.slice(0);
  let newArr;

  for (let i = 0; i < d; i++) {
    let first = arr.shift(1);
    newArr = arr.slice(0,arr.length).concat(first);
    arr = newArr;
  }
  // console.log(newArr);
  return newArr;
}

getResult();

function getTwo(arr,rotations) {
  let shift = rotations % arr.length;
  let last = arr.slice(0,shift);
  let first = arr.slice(shift);
  console.log(first.concat(last));
  return first.concat(last);
}

getTwo(data,-1);
let x = 1;
