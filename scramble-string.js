/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const memo = new Map();

    function scrambleHelper(str1, str2) {
        const key = str1 + '#' + str2;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const len = str1.length;

        // Check if the two strings are equal
        if (str1 === str2) {
            memo.set(key, true);
            return true;
        }

        // Check if the character counts are equal
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let i = 0; i < len; i++) {
            count1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        if (!count1.every((count, index) => count === count2[index])) {
            memo.set(key, false);
            return false;
        }

        // Try all possible split points and check if substrings are scrambled
        for (let i = 1; i < len; i++) {
            const isScrambleLeftLeft = scrambleHelper(str1.slice(0, i), str2.slice(0, i));
            const isScrambleLeftRight = scrambleHelper(str1.slice(0, i), str2.slice(len - i));
            const isScrambleRightLeft = scrambleHelper(str1.slice(i), str2.slice(0, len - i));
            const isScrambleRightRight = scrambleHelper(str1.slice(i), str2.slice(i));

            if ((isScrambleLeftLeft && isScrambleRightRight) || (isScrambleLeftRight && isScrambleRightLeft)) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return scrambleHelper(s1, s2);
};
