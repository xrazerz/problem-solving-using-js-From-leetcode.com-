var removeDuplicates = function(nums) {
   const n = nums.length;

    if (n <= 2) {
        return n;
    }

    let index = 2;

    for (let i = 2; i < n; i++) {
        const currentNum = nums[i];
        const prev2Num = nums[index - 2];

        if (currentNum !== prev2Num) {
            nums[index++] = currentNum;
        }
    }

    return index;
};
