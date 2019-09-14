/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let substrings = [];
    let substring = '';
    let wordArr = s.split('');
    let seen = {};
    let currChar, lookAhead;

    for (let i = 0; i < wordArr.length - 1; i++) {
        seen = {};
        currChar = wordArr[i];
        seen[currChar] = true;
        substring = currChar;
        for (let j = i + 1; j < wordArr.length; j++) {
            lookAhead = wordArr[j];
            if (!seen[lookAhead]) {
                substring += lookAhead;
                seen[lookAhead] = true;
            } else {
                substrings.push(substring);
                break;
            }
        }
        substrings.push(substring);
    }

    // console.log(substrings);
    let length = 0;
    for (let str of substrings) {
        length = Math.max(str.length, length);
    }

    return length;
};


/**
 * BETTER!!!
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let length = 0;
    let seen = {};
    let wordArr = s.split('');
    let i = 0, j = 0;

    while (i < s.length && j < s.length) {
        if (!seen[wordArr[j]]) {
            console.log(wordArr[j], j, i, seen);
            seen[wordArr[j]] = true;
            j++;
            length = Math.max(length, j - i);
        } else {
            console.log(wordArr[i], j, i, seen);
            delete seen[wordArr[i]];
            i++;
        }
    }

    return length;
};