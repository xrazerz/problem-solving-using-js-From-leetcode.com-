/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let mergedIndex = m + n - 1;

    while (index1 >= 0 && index2 >= 0) {
        nums1[mergedIndex--] = nums1[index1] > nums2[index2] ? nums1[index1--] : nums2[index2--];
    }

    // No need to check for remaining elements in nums2
    while (index2 >= 0) {
        nums1[mergedIndex--] = nums2[index2--];
    }
};
