/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
        nums.sort((a, b) => a - b); // Sort the array to handle duplicates

    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]); // Add a copy of the current subset to the result

        for (let i = start; i < nums.length; i++) {
            // Skip duplicates to avoid duplicates in the result
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            current.push(nums[i]); // Include the current number in the subset
            backtrack(i + 1, current); // Recursively generate subsets starting from the next index
            current.pop(); // Backtrack by removing the last element
        }
    }

    backtrack(0, []);

    return result;
};
