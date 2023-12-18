/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let currentWidth = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (currentWidth + currentLine.length + word.length <= maxWidth) {
            currentLine.push(word);
            currentWidth += word.length;
        } else {
            result.push(justifyLine(currentLine, currentWidth, maxWidth));
            currentLine = [word];
            currentWidth = word.length;
        }
    }

    // Justify the last line (left-justified)
    result.push(justifyLastLine(currentLine, maxWidth));

    return result;
}

function justifyLine(words, currentWidth, maxWidth) {
    let spacesNeeded = maxWidth - currentWidth;
    const numGaps = words.length - 1;

    let justifiedLine = words[0];
    for (let i = 1; i < words.length; i++) {
        const spacesPerGap = Math.ceil(spacesNeeded / (numGaps - i + 1));
        justifiedLine += " ".repeat(spacesPerGap) + words[i];
        spacesNeeded -= spacesPerGap;
    }

    // Distribute any remaining spaces evenly at the end of the line
    justifiedLine += " ".repeat(spacesNeeded);

    return justifiedLine;
}


function justifyLastLine(words, maxWidth) {
    const lastLine = words.join(" ");
    return lastLine + " ".repeat(maxWidth - lastLine.length);
}
