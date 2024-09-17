let n = 0; //global variable for length of array
let d = 0; // number of rotations
let data = []; // global array to store the input strings

//read standard input
process.stdin.setEncoding("utf8");
process.stdin.resume();

//store input
let input = "";
process.stdin.on("data", function(data) { //process input
  input += data; //puts all data into one long string.
});
process.stdin.on("end", function() { //when input ends
  let linesOfInput = input.split("\n"); //split where there is a break
  let temp = linesOfInput[0].split(" "); //split the first two characters
  temp.map(Number); //changes all of the string of an array into numbers
  n = temp[0];
  d = temp[1];
  data = linesOfInput[1].split(" ");

  main();
});

function main() {
  //verify values - covers edge cases where n and d are less than zero
  if (n <= 0 || d <= 0 || data.length > n || data.length < d) {
    throw Error("The input values are invalid.");
  }

  //get result
  //this is a new array after the left shifts
  let result = getResult();

  //output result
  process.stdout.write(result.join(" ")); // uses standard output to return the result
}

//Runtime - O(n) solution
function getResult() {
  let arr = data.slice(0);
  let newArr;

  for (let i = 0; i < d; i++) {
    let first = arr.shift(1);
    newArr = arr.slice(0,arr.length).concat(first);
    arr = newArr;
  }

  return newArr;
}

//O(1)

function getTwo() {
  let shift = d % data.length;
  let first = data.slice(0,shift); //O(n)
  let last = data.slice(shift); // O(n)
  return last.concat(first);
}

//modifies array in place
var rotate = function(nums, k) {
    let take = k % nums.length;
    let beginning = nums.splice(-take);

    for(let i = beginning.length;i--;i<=0) {
        nums.unshift(beginning[i]);
    }
};
