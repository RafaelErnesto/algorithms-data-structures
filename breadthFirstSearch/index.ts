interface Graph {
    [key:string]: string[]
}
//this is a directional graph
const graph:Graph = {
    A: ['B', 'C', 'E'],
    B: ['C', 'F'],
    C: ['D'],
    D: [],
    E: [],
    F: []
}
//check if there's a path between two nodes, initial and target
const bfs = (initial: string, target: string) => {
    if(!graph[initial]) return false

    var queue: string[] = graph[initial]
    const visitedNodes: string[] = []

    while(queue.length > 0) {
        const node:string = queue.shift()!
        if(!visitedNodes.includes(node)) {
            if(target === node) return true
            visitedNodes.push(node)
            queue = queue.concat(graph[node])
        }
    }
    return false
}

(function() {
    console.log(bfs('A', 'F'))//true
    console.log(bfs('B', 'E'))//false
})()