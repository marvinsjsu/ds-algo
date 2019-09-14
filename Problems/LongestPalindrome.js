var longestPalindrome = function(s) {
    if (isPalindrome(s)) return s;
    let palindromes = {};
    let maxLength = 0;
    let longestPalindrome = '';
    let j = s.length;
    let word;

    for (let i = 0; i < s.length; i++) {
        j = s.length;
        while (i <= j) {
            word = s.slice(i, j);
            if (isPalindrome(word)) {
                palindromes[word] = true;
                if (word.length > maxLength) {
                    maxLength = word.length;
                    longestPalindrome = word;
                }
            }
            j--;
        }
    }

    // console.log('palindromes: ', palindromes);
    return longestPalindrome;
};

function isPalindrome (str) {
    // console.log('str: ', str);
    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        if (str[i] !== str[j]) return false;
        i++;
        j--;
    }

    return true;
}





var longestPalindrome = function(s) {
    if (isPalindrome(s)) return s;
    let palindromes = {};
    let nonPalindromes = {};
    let maxLength = 0;
    let longestPalindrome = '';
    let j = s.length;
    let word;

    for (let i = 0; i < s.length; i++) {
        j = s.length;
        while (i <= j) {
            word = s.slice(i, j);
            if (word[0] !== word[word.length - 1]) {
                j--;
                continue;
            }

            if (isPalindrome(word)) {
                palindromes[word] = true;
                if (word.length > maxLength) {
                    maxLength = word.length;
                    longestPalindrome = word;
                }
            }

            j--;
        }
    }

    // console.log('palindromes: ', palindromes);
    // console.log('nonPalindromes: ', nonPalindromes);
    return longestPalindrome;
};

function isPalindrome (str) {
    // console.log('str: ', str);
    if (str.length === 0) return false;
    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        if (str[i] !== str[j]) return false;
        i++;
        j--;
    }

    return true;
}

