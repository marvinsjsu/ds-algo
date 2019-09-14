/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const posLetters = {};
    for (let i = 0; i < endWord.length; i++) {
      posLetters[i] = [...new Set(wordList.map((el) => {
          return el.split('')[i];
      }))];
    }

    let validWords = new Set(wordList);
    let workQueue = [[beginWord]];
    let transformedWord = beginWord;
    let path = [];
    let possibilites = [];
    let actualPaths = [];
    let currShortestPath = null;
    let seen = {};

    while (workQueue.length > 0) {
        if (workQueue.length === 0) return 0;
        path = workQueue.shift();
        transformedWord = path[path.length - 1];

        let possibilities = genTrans(transformedWord, validWords, path, posLetters);
        while(possibilities.length) {
            let word = possibilities.pop();

            if (currShortestPath === null && word === endWord) {
                // console.log([...path, word]);
                currShortestPath = path.length + 1;
            } else if (currShortestPath !== null && word === endWord) {
                // console.log([...path, word]);
                currShortestPath = Math.min(path.length + 1, currShortestPath);
            } else if (seen[word]) {
                // console.log('seen: ', word);
                // if (word === 'ion') {
                //     console.log([...path, word]);
                // }
                continue;
            } else {
                seen[word] = 1;
                let newPath = [...path, word];
                // console.log(newPath);
                workQueue.push(newPath);
                transformedWord = word;
            }
        }
    }

    return currShortestPath;
};

function genTrans(beginWord, validWords, path, letters) {
    let trans = [];
    let print = false;
    for (let i = 0; i < beginWord.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            let t = beginWord.split('');
            t[i] = letters[i][j];
            transformedWord = t.join('');

            if (validWords.has(transformedWord) && !path.includes(transformedWord)) {
                trans.push(transformedWord);
            }
        }
    }

    return trans;
}