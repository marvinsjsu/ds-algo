// SinglyLinkedList
//   - insertion O(1) at beginning or end
//   - removal
//      - can be O(1) if at beginning
//      - O(n) if removing end
//   - searching - O(n)
//   - access - O(n), we're not using indexes
//
// - use if we don't care about random access
//   and want fast insertion and deletion
//   or use that a lot
// - foundation for stacks and queues

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length++;
    return this;
  }

  pop () {
    if (this.length === 0) return undefined;

    let prevNode = this.get(this.length - 2);
    let node = prevNode.next;
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;

    return node;
  }

  shift () {
    if (this.length === 0) return undefined;

    let node = this.head;
    this.head = node.next;
    node.next = null;
    this.length--;

    return node;
  }

  unshift (val) {
    if (this.length === 0) return !!this.push(val);

    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index >= this.length) return undefined;
    let node = this.head;
    let counter = 0;

    while (counter < index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set (index, val) {
    if (index < 0 || index >= this.length) return undefined;

    let node = this.get(index);
    if (node !== null) {
      node.val = val;
      return true;
    }

    return true;
  }

  insert (index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) !!this.push(val);

    let node = new Node(val);
    let prevNode = this.get(index - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let prevNode = this.get(index - 1);
    let node = prevNode.next;
    prevNode.next = node.next;
    node.next = null;
    this.length--;
    return node;
  }

  reverse () {
    if (this.head === null) return undefined;
    if (this.length === 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print () {
    let elements = [];
    let node = this.head;

    while (node !== null) {
      elements.push(node.val);
      node = node.next;
    }

    console.log(elements);
  }
}