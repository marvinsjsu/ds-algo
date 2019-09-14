class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  insert (val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let node = this.root;

      while (node !== null) {
        if (newNode.val === node.val) return undefined;
        if (newNode.val < node.val) {
          if (node.left) {
            node = node.left;
          } else {
            node.left = newNode;
            break;
          }
        } else {
          if (node.right) {
            node = node.right;
          } else {
            node.right = newNode;
            break;
          }
        }
      }
    }

    return this;
  }

  find (val) {
    if (this.root === null) return undefined;
    let node = this.root;
    while (node !== null) {
      if (val === node.val) {
        return node;
      } else if (val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return undefined;
  }

  bfs () {
    let queue = [this.root];
    let visited = [];
    let node;
    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  dfsPreOrder () {
    // parent, left, right

    let visited = [];
    let currNode = this.root;

    function recur (node) {
      if (node === null) return true;
      visited.push(node.val);

      if (node.left) {
        recur(node.left);
      }

      if (node.right) {
        recur(node.right);
      }
    }

    recur(currNode);
    return visited;
  }

  dfsPostOrder () {
    // left, right, parent

    let visited = [];
    let currNode = this.root;

    function traverse (node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.val);
    }

    traverse(currNode);
    return visited;
  }

  dfsInOrder () {
    // left, parent, right

    let visited = [];
    let currNode = this.root;

    function traverse (node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(currNode);
    return visited;
  }



  print () {
    let queue = [this.root];
    let node;
    while (queue.length) {
      node = queue.pop();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      console.log('node: ', node.val);
    }
  }
}