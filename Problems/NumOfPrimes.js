/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    let count = 0;
    let numbers = setup(n);

    for (let key in numbers) {
        if (numbers[key]) count++;
    }

    return count;
};

var setup = function(n) {
    let numbers = {};

    for (let i = 2; i < n; i++) {
        numbers[i] = true;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (numbers[i]) {
            for (let j = i * i; j < n; j += i) {
                numbers[j] = false;
            }
        }
    }

    return numbers;
}




/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    let count = 0;
    let currNum = 2;
    let primes = [];
    let prime;

    function isPrime(num) {
        if (num <= 1) return false;
        let max = Math.sqrt(num);
        for (let i = 2; i <= max; i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    while (currNum < n) {
        prime = true;

        if (currNum > 2 && currNum % 2 === 0) {
            prime = false;
        }

        if (currNum > 3 && currNum % 3 === 0) {
            prime = false;
        }

        if (currNum > 5 && currNum % 5 === 0) {
            prime = false;
        }

        if (currNum > 7 && currNum % 7 === 0) {
            prime = false;
        }

        if (currNum % primes[primes.length - 1] === 0) {
            prime = false;
        }

        if (prime) {
            if (isPrime(currNum)) {
                primes.push(currNum);
                count++;
            }
        }

        currNum++;
    }

    console.log(primes);


    return count;
};

