class PriorityQueue {
  constructor () {
    this.queue = [];
  }
  enqueue (val, priority) {
    this.queue.push({val, priority});
    this.sort();
  }
  dequeue () {
    return this.queue.shift();
  }
  sort () {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor () {
    this.adjacencyList = {};
  }
  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge (v1, v2, weight) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push({val: v2, weight});
    } else {
      this.adjacencyList[v1] = [{val: v2, weight}];
    }

    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push({val: v1, weight});
    } else {
      this.adjacencyList[v2] = [{val: v1, weight}];
    }
  }
  dijkstras (start, end) {
    const queue = new PriorityQueue();
    const distance = {};
    const previous = {};

    for (let key in this.adjacencyList) {
      distance[key] = key === start ? 0 : Infinity;
      previous[key] = null;
    }

    queue.enqueue(start, 0);

    let currNode, currVal, currWeight, neighbors, currDistance;
    while (queue.queue.length) {
      currNode = queue.dequeue();
      currVal = currNode.val;
      currWeight = currNode.weight;

      if (currVal === end) {
        let path = [];
        let prev = end;
        while (prev !== null) {
          path.push(prev);
          prev = previous[prev];
        }

        return path.reverse();
      }

      neighbors = this.adjacencyList[currVal];
      neighbors.forEach((neighbor) => {
        currDistance = neighbor.weight + distance[currVal];

        if (currDistance < distance[neighbor.val]) {
          distance[neighbor.val] = currDistance;
          previous[neighbor.val] = currVal;
          queue.enqueue(neighbor.val, currDistance);
        }
      });
    }
  }
  print () {
    console.log('AdjacencyList: ', this.adjacencyList);
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


// graph.Dijkstra("A", "E");



