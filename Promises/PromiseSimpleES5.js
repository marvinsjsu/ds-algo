// we need to build an object that represents a Promise
// - on a Promise we can call .then, .catch
// - .then adds callbacks to our Promise that get ran
//   when the asynchronous call returns a value or error
// - .catch adds a callback that handles error from our
//   asynchronous call
// - when creating a new Promise we pass a callback that
//   expects a resolve and reject as its arguments


// return new Promise ((resolve, reject) => {
//   // run asynchronous function
//   // when that returns if successful call resolve(data)
//   // when it fails call reject(error)
// });

function PromiseSimpleES5 (callBackFunc) {
  this.thenFunctions = [];
  this.catchFunction = () => {};

  this.resolve = this.resolve.bind(this);
  this.reject = this.reject.bind(this);

  callBackFunc(this.resolve, this.reject);
}

PromiseSimpleES5.prototype.resolve = function (data) {
  let currData = data;

  try {
    this.thenFunctions.forEach((currFunction) => {
      currData = currFunction(currData);
    });
  } catch (error) {
    this.thenFunctions = [];
    this.reject(error);
  }
}

PromiseSimpleES5.prototype.reject = function (error) {
  this.catchFunction(error);
}

PromiseSimpleES5.prototype.then = function (callBack) {
  this.thenFunctions.push(callBack);
  return this;
}

PromiseSimpleES5.prototype.catch = function (callBack) {
  this.catchFunction = callBack;
}