/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];

    function backtrack(current, used) {
        if (current.length === 1 << n) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < n; i++) {
            const next = current[current.length - 1] ^ (1 << i);

            if (!used.has(next)) {
                used.add(next);
                current.push(next);
                backtrack(current, used);
                current.pop();
                used.delete(next);
            }
        }
    }

    backtrack([0], new Set([0]));

    return result[0] || [];
};
