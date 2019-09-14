class Node {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor () {
    this.queue = [];
  }
  insert (val, priority) {
    let node = new Node(val, priority);
    this.queue.push(node);
    this.bubbleUp();
  }
  bubbleUp () {
    let currIdx = this.queue.length - 1;
    let currNode = this.queue[currIdx];
    let parentIdx, parentNode;
    while (currIdx > 0) {
      parentIdx = Math.floor((currIdx - 1) / 2);
      parentNode = this.queue[parentIdx];

      if (currNode.priority >= parentNode.priority) break;

      this.queue[currIdx] = parentNode;
      this.queue[parentIdx] = currNode;
      currIdx = parentIdx;
    }
  }
  remove () {
    if (this.queue.length === 0) return null;
    if (this.queue.length === 1) return this.queue.pop();
    let node = this.queue[0];
    this.queue[0] = this.queue.pop();
    this.sinkDown();
    return node;
  }
  sinkDown () {
    const length = this.queue.length;
    let parentIdx = 0;
    let parentNode = this.queue[parentIdx];
    let leftIdx, leftNode, rightIdx, rightNode, swap;
    while (true) {
      leftIdx = (2 * parentIdx + 1);
      rightIdx = (2 * parentIdx + 2);
      swap = null;

      if (leftIdx < length) {
        leftNode = this.queue[leftIdx];
        if (leftNode.priority < parentNode.priority) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightNode = this.queue[rightIdx];
        if (
          (swap === null && rightNode.priority < parentNode.priority)
          || (swap !== null && rightNode.priority < leftNode.priority)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.queue[parentIdx] = this.queue[swap];
      this.queue[swap] = parentNode;
      parentIdx = swap;
    }
  }
}