/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let pArray = paragraph
        .replace(/[!?',;.]/g, ' ')
        .split(' ');

    let seen = {};
    let maxCount = 0;
    let maxWord = '';
    let currWord;

    while (pArray.length) {
        currWord = pArray.shift().toLowerCase();

        if (banned.includes(currWord)) continue;
        if (currWord === '') continue;

        if (seen[currWord]) {
            seen[currWord] += 1;
        } else {
            seen[currWord] = 1;
        }

        if (seen[currWord] > maxCount) {
            maxCount = seen[currWord];
            maxWord = currWord;
        }
    }
    console.log('seen: ', seen);
    return maxWord;
};