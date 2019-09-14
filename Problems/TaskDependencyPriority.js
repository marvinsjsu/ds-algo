module.exports.tasks = function (n, a, b) {
    let graph = new Graph();

    for (let i = 0; i < a.length; a++) {
      graph.addEdge(a[i], b[i]);
    }

    console.log(graph);
}

function Graph() {
    this.adjacencyList = {};
    this.addVertex = (v) => {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }
    this.addEdge = (v1, v2) => {
        if (!this.adjacencyList[v1]) {
          this.adjacencyList[v1] = [v2];
        } else if (!this.adjacencyList[v2]) {
          this.adjacencyList[v2] = [v1];
        } else {
          this.adjacencyList[v1].push(v2);
          this.adjacencyList[v2].push(v1);
        }
    }
}