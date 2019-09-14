module.exports.circuitsOutput = function (circuitsExpression) {
  // Write your code here
  let output = [];
  let opStack = [];
  let currEl;
  let frame;
  let frameOutput = null;
  let operand, currFrame;

  function parse(exprRecur) {
    if (exprRecur.length === 0){
        return frameOutput;
    };

    currEl = exprRecur.shift();

    switch(currEl) {
        case '[':
            currEl = exprRecur.shift();
            frame = new Frame(currEl);
            opStack.push(frame);
            break;
        case ']':
            frame = opStack.pop();
            frameOutput = frame.evaluate();
            if (opStack.length > 0) {
                frame = opStack[opStack.length - 1];
                frame.addArg(frameOutput);
            } else {
                return frameOutput;
            }
            break;
        case '1':
            frame.addArg(true);
            break;
        case '0':
            frame.addArg(false);
            break;
    }
    // console.log(opStack);
    // debugger;
    parse(exprRecur);
  }

  let expr;
  circuitsExpression.forEach((str) => {
     expr = str.split('');
     parse(expr);
     output.push(frameOutput ? 1 : 0);
  });

  return output;
}

function Frame(operation) {
  this.operation = operation;
  this.func = null;
  this.args = [];

  return {
    func: this.func,
    args: this.args,
    addArg: (val) => {
        this.args.push(val);
    },
    evaluate: () => {
        // console.log('evaluate - args:', this.args, this.operation);
        if (this.operation === '|') {
            return this.args.includes(true);
        } else if (this.operation === '&') {
            return this.args.includes(false) ? false : true;
        } else if (this.operation === '!') {
            return !this.args[0];
        }
    }
  }
}

