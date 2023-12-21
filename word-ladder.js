/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }

    const queue = [];
    queue.push(beginWord);
    let level = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentWord = queue.shift();

            for (let j = 0; j < currentWord.length; j++) {
                const originalChar = currentWord[j];

                for (let k = 0; k < 26; k++) {
                    const newChar = String.fromCharCode(97 + k);

                    if (newChar !== originalChar) {
                        const newWord = currentWord.slice(0, j) + newChar + currentWord.slice(j + 1);

                        if (newWord === endWord) {
                            return level + 1;
                        }

                        if (wordSet.has(newWord)) {
                            queue.push(newWord);
                            wordSet.delete(newWord);
                        }
                    }
                }
            }
        }

        level++;
    }

    return 0;
};
