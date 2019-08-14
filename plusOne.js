var plusOne = function(digits) {
  if(digits.length === 1 && digits[0] === 9) {
      digits[0] = 0;
      digits.unshift(1);
      return digits;
  }

  for (var i = digits.length-1; i >= 0; i--) {

    if(digits[i] < 9) {
      digits[i]++;
      return digits;
    } else if(i > 0 && digits[i] > 9) {
      digits[i] = 0;
      digits[i-1]++;
      if(digits[i-1] <= 9) return digits;
    }

    if(i === 0 && digits[i] > 9){
      digits[i] = 0;
      digits.unshift(1);
      return digits;
    }
  }
};

// [9,9,9]
// [9,10,0];
// [10,0,0];
//
// [8,9,9]
// [8,10,0]
// [9,0,0]

// [8,9,9]
// [8,9,10]
// [-,-,0]
// add = 1
// [8,9,9]
// 10
//
// [-,0,0]
// add = 1
// 9,
// 9


//Slightly faster  solution
var plusOne  = (digits) => {
  var result = [], add = 0, len = digits.length;

  digits[len-1]++; // add one to the digit

  for (let i = len-1; i >= 0; i--) {
    let sum = digits[i] + add;
    result[i] = sum%10;
    add = Math.floor(sum/10);
  }

  if(add) {
    result.unshift(1);
  }

  return result;
};
