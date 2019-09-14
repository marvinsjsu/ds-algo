class Graph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge (vertexA, vertexB) {
    if (!this.adjacencyList[vertexA]) {
      this.addVertex(vertexA) = [vertexB];
    } else {
      this.adjacencyList[vertexA].push(vertexB);
    }

    if (!this.adjacencyList[vertexB]) {
      this.addVertex(vertexB) = [vertexA];
    } else {
      this.adjacencyList[vertexB].push(vertexA);
    }
  }

  removeEdge (vertexA, vertexB) {
    this.adjacencyList[vertexA] = this.adjacencyList[vertexA].filter(v => v !== vertexB);
    this.adjacencyList[vertexB] = this.adjacencyList[vertexB].filter(v => v !== vertexA);
  }

  removeVertex (vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge (adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfs (vertex) {
    let result = [];
    let seen = {};
    let that = this;
    function dfsRecur (vertexRecur) {
      if (vertexRecur === null) return result;
      seen[vertexRecur] = true;
      result.push(vertexRecur);

      for (let adjacentVertex of that.adjacencyList[vertexRecur]) {
        if (!seen[adjacentVertex]) {
          dfsRecur(adjacentVertex);
        }
      }
    }

    dfsRecur(vertex);

    return result;
  }

  dfsIter (vertex) {
    let result = [];
    let seen = {};
    let stack = [vertex];
    let currVertex;

    while (stack.length) {
      currVertex = stack.pop();

      if (!seen[currVertex]) {
        seen[currVertex] = true;
        result.push(currVertex);

        for (let adj of this.adjacencyList[currVertex]) {
          stack.push(adj);
        }
      }
    }

    return result;
  }

  bfs (vertex) {
    let path = [];
    let seen = {};
    let workQueue = [vertex];
    let currVertex;

    while (workQueue.length) {
      currVertex = workQueue.shift();

      if (!seen[currVertex]) {
        seen[currVertex] = true;
        path.push(currVertex);

        for (let adj of this.adjacencyList[currVertex]) {
          if (!seen[adj]) {
            workQueue.push(adj);
          }
        }
      }
    }

    return path;
  }
}