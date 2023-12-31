function wordBreak(s: string, wordDict: string[]): string[] {
     const wordSet = new Set(wordDict);
    const memo: { [key: string]: string[] } = {};

    function backtrack(start: number): string[] {
        if (start === s.length) {
            return [''];
        }

        if (memo[start] !== undefined) {
            return memo[start];
        }

        const sentences: string[] = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const restSentences = backtrack(end);
                for (const restSentence of restSentences) {
                    sentences.push(word + (restSentence === '' ? '' : ' ' + restSentence));
                }
            }
        }

        memo[start] = sentences;
        return sentences;
    }

    return backtrack(0);   
};
