//slow solution -

var containsDuplicate = function(nums) {
    let seen = [];
    let i = 0;
    let hasDuplicates = false;
    if (nums.length < 2) return false;

    while(hasDuplicates !== true && i < nums.length) {
        if(seen.includes(nums[i])) {
           hasDuplicates = true;
           return hasDuplicates;
        }

        seen.push(nums[i]);
        i++;
    }
    return hasDuplicates;
};

// faster solution
containsDuplicate = (nums) => {
  let seen = {};
  let i = 0;

  while(i < nums.length)  {
    if(seen[nums[i]]) {
      return true;
    }
    i++;
    seen[nums[i]] = true;
  }
  return false;
};
