var rotate = function(nums, k) {
    let take = k % nums.length;
    let beginning = nums.splice(-take);

    for(let i = beginning.length;i--;i<=0) {
        nums.unshift(beginning[i]);
    }
};
