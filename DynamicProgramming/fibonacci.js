function fib (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

function fibMemoized (n, memo = {}) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let a, b;
  if (memo[n - 1]) {
    a = memo[n];
  } else {
    a = fibMemoized(n - 1, memo);
    memo[n - 1] = a;
  }

  if (memo[n - 2]) {
    b = memo[n - 2];
  } else {
    b = fibMemoized(n - 2, memo);
    memo[n - 2] = b;
  }

  return a + b;
}

function fibMemo (n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;

  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}


function firstNFibs(n) {
  let fibs = [];
  let counter = 0;
  while (counter < n) {
    fibs.push(fibMemo(counter));
    counter++;
  }

  return fibs;
}