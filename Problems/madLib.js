function madLib (verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}

function isSubstring (searchString, subString) {
  const searchStringArr = searchString.split(" ");
  return searchStringArr.includes(subString);
}

function fizzBuzz (nums) {
  return nums.filter((num) =>  (
    ((num % 3 === 0)
    || (num % 5 === 0))
    && (num % 3 !== num % 5)
    ));
}

function isPrime (num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes (n) {
  let arr = firstNPrimes(n);
  console.log('arr: ', arr);
  return arr.reduce((acc, el) => (acc + el), 0);
}

function firstNPrimes (n) {
  // get the first n primes
  const primes = [];
  let num = 1;
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }

  return primes;
}

function titleize (names, cb) {
  let titleized = names.map((el) => `Mx. ${el} Jingleheimer Schmidt`);
  return cb(titleized);
}


function Elephant (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function () {
  this.height += 12;
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks = [...this.tricks, trick];
}

Elephant.prototype.play = function () {
  let idx = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[idx]}`);
}

Elephant.prototype.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting!`);
}



function dinerBreakfast () {
  let statement = `I'd like cheesy scrambled eggs please`;
  console.log(statement);

  return function (append) {
    statement = statement.replace('please', 'and') + ` ${append} please`;
    console.log(statement);
  }
}









































