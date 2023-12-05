function depthFirstSearch(graph, startNode, targetNode) {
    // I actually didn't care for how my original was handling a couple things and I'm not sure where I got the syntax for a couple of lines
    // so I rewrote those couple things in this depthFirstSearch because I wanted to use this a little in the augmenting path exercise, 
    // but there's a chance I might have the same issue as on that one, I'm going to err on the side of caution.
    if (Array.isArray(graph)) {
        if (graph.includes(targetNode)) {
            return [startNode, targetNode];
        } else {
            return [];
        }
    }
    
    let isEmpty = true;
    for (let key in graph) {
        isEmpty = false;
        break;
    }
    
    if (isEmpty) {
        if (startNode === targetNode) {
            return [startNode];
        } else {
            return [];
        }
    }

    let nodePath = [[startNode]];
    let visited = new Set();

    // I did get a little bit of help from one of them chat bots while rewriting a chunk of this while loop,
    // but it was just in the interest of saving time
    while (nodePath.length > 0) {
        let path = nodePath.pop();
        let node = path[path.length - 1];

        if (node === targetNode) {
            return path;
        }

        if (!visited.has(node)) {
            visited.add(node);
        }
    }
}
