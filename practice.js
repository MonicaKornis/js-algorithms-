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
  console.log(newArr);
  return newArr;
}

getResult();

function getTwo() {
  let shift = d % data.length;
  let last = data.slice(0,shift);
  let first = data.slice(shift);
  console.log(first.concat(last));
  return last.concat(first);
}

getTwo();
