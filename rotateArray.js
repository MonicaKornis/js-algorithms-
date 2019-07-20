var rotate = function(nums, k) {
    let shift = k % nums.length;
    let newBeg = nums.splice(nums.length-k,k);

    for(let i =newBeg.length;i--;i>=0) {
        nums.unshift(newBeg[i]);
    }

    return nums;
}
