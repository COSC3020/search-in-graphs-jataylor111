function depthFirstSearch(graph, startNode, targetNode) {
    if (graph instanceof Array) {
        return graph.indexOf(targetNode) !== -1 ? [startNode, targetNode] : [];
    }
    
    let isEmpty = true;
    for (let key in graph) {
        isEmpty = false;
        break;
    }
    
    if (isEmpty) {
        return startNode === targetNode ? [startNode] : [];
    }

    let stack = [[startNode]];
    let visited = new Set();

    while (stack.length > 0) {
        let path = stack.pop();
        let node = path[path.length - 1];

        if (node === targetNode) {
            return path;
        }

        if (!visited.has(node)) {
            visited.add(node);

            for (let neighbor of graph[node]) {
                let newPath = path.slice(); 
                newPath.push(neighbor);
                stack.push(newPath);
            }
        }
    }

    return [];
}
