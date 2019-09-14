// fetch(apiUrl)
//   .then((response) => json.parse(response))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// function fetch (apiUrl) {
//   return new Promise((resolve, reject) => {
//     // make the XHR call - api call to get data
//     // - this call should return json data
//     //   or an error
//     // - call resolve if return is json data,
//     //   and pass the data, resolve(data)
//     // - call reject if there was an error,
//     //   and pass the erorr, reject(error)
//   });
// }

class PromiseSimple {
  constructor (callBackFunc) {
    this.thenFunctions = [];
    this.catchFunction = () => {};

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    callBackFunc(this.resolve, this.reject);
  }

  then (fun) {
    this.thenFunctions.push(fun);
    return this;
  }

  catch (fun) {
    this.catchFunction = fun;
    return this;
  }

  resolve (value) {
    let currValue = value;

    try {
      this.thenFunctions.forEach((currFunc) => {
        currValue = currFunc(currValue);
      });
    } catch (error) {
      this.thenFunctions = [];
      this.reject(error);
    }
  }

  reject (error) {
    this.catchFunction(error);
  }
}



