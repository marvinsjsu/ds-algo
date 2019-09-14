/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 *
 * This is O(n)
 */
var findJudge = function(N, trust) {
    if (trust.length === 0 && N === 1) return 1;
    let possibleJudges = {};
    let personSeen = {};
    let currPerson;
    let judge = -1;

    while (trust.length) {
        currPerson = trust.shift();
        personSeen[currPerson[0]] = true;

        if (possibleJudges[currPerson[1]]) {
            possibleJudges[currPerson[1]] += 1;
        } else {
            possibleJudges[currPerson[1]] = 1;
        }

        if (possibleJudges[currPerson[0]]) {
            possibleJudges[currPerson[0]] -= 1;
        }
    }


    for (let key in possibleJudges) {
        if (possibleJudges[key] === (N - 1) && !personSeen[key]) {
            judge = parseInt(key);
        }
    }

    return judge;
};


/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (trust.length === 0 && N === 1) return 1;
    let possibleJudges = {};
    let personSeen = {};
    let judge = -1;
    let currPerson;

    while (trust.length) {
        currPerson = trust.shift();
        personSeen[currPerson[0]] = true;

        if (possibleJudges[currPerson[1]]) {
            possibleJudges[currPerson[1]] += 1;
        } else {
            possibleJudges[currPerson[1]] = 1;
        }

        if (possibleJudges[currPerson[0]]) {
            possibleJudges[currPerson[0]] -= 1;
        }

        if (N - possibleJudges[currPerson[1]] === 1
            && !personSeen[currPerson[1]]
        ) {
            judge = currPerson[1];
        }
    }

    return personSeen[judge] ? -1 : judge;
};




/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (trust.length === 0 && N <= 0) return -1;
    if (trust.length === 0 && N === 1) return 1;

    let possibleJudges = {};
    let judge = -1;

    while (trust.length) {
        currPerson = trust.shift();

        if (possibleJudges[currPerson[1]]) {
            possibleJudges[currPerson[1]] += 1;
        } else {
            possibleJudges[currPerson[1]] = 1;
        }

        possibleJudges[currPerson[0]] = -1;
    }

    for (let key in possibleJudges) {
        if (N - possibleJudges[key] === 1) {
            judge = parseInt(key);
        }
    }

    return judge;
};




