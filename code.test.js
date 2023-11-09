const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testDepthFirstSearch =
    jsc.forall("array nat", "nat", "nat", function(arr, startNode, targetNode) {
        var graph = JSON.parse(JSON.stringify(arr));
        var startNodeCopy = JSON.parse(JSON.stringify(startNode));
        var targetNodeCopy = JSON.parse(JSON.stringify(targetNode));
        return depthFirstSearch(graph, startNodeCopy, targetNodeCopy).includes(targetNodeCopy) ==
            graph.some(function(node)
                { return node === targetNodeCopy; });
    });

jsc.assert(testDepthFirstSearch);
