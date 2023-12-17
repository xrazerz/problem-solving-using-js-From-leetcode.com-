// From LeetCode

function mySqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 1;
    let right = Math.floor(x / 2);
    let result = 0;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
            result = mid; // Update result if mid*mid is less than x
        } else {
            right = mid - 1;
        }
    }

    return result;
}
