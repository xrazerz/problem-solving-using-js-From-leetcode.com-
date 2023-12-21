/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
       const n = s.length;

    const isPalindrome = new Array(n).fill(false).map(() => new Array(n).fill(false));

    const minCuts = new Array(n).fill(0);

    function isPal(i, j) {
        return s[i] === s[j] && (i + 1 >= j - 1 || isPalindrome[i + 1][j - 1]);
    }

    for (let end = 0; end < n; end++) {
        minCuts[end] = end;

        for (let start = 0; start <= end; start++) {
            if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
                isPalindrome[start][end] = true;
                if (start === 0) {
                    minCuts[end] = 0;
                } else {
                    minCuts[end] = Math.min(minCuts[end], minCuts[start - 1] + 1);
                }
            }
        }
    }

    return minCuts[n - 1];
};
