//EVERY num in an array appears twice except 1; find the single number in an array that is a NOT  a duplicate

var singleNumber = function(nums) {
   let repeats = 0;
   nums.sort();
   // console.log(nums);
   for(let i = 0;i< nums.length;i++) {
       if(nums[i] === nums[i+1]) {
           repeats++;
       }

       if(nums[i] !== nums[i+1])  {
           if(repeats === 0) {
               return nums[i];
           } else {
               repeats = 0;

           }
       }
   }
};

// slightly faster solution
singleNumber = (nums) => {
  let counts = {};
  for(let i = 0; i < nums.length; i++) {
    if(counts[nums[i]] === undefined) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]] = counts[nums[i]] + 1;
    }
  }

  Object.entries(counts).forEach((array) => {
    if(array[1] === 1) {
      return array[0];
    }
  });
};

//fastest solution
singleNumber = (nums) => {
  let found = {};

  nums.forEach((num) => {
    console.log(found);
    if(!found[num]) {
      //if num is found for first time
      found[num] = 1;
    } else {
      delete found[num]; //will delete the number from the  hash if it is
      // found again
    }
  });

  // we'll be left with the number that only appears once - if it occurs  a second
  //time  it will be deleted
  return Object.keys(found)[0];
};
