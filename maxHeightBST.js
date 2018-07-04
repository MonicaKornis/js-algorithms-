var maxDepth = function(root) {
    let queue = [[root,1]];
    let depth = 0;
    let currentNode = queue[0];
    if (root === null) return depth;
    depth++;


    while(queue.length > 0) {
        depth = depth >= currentNode[1] ? depth : currentNode[1];

        if(currentNode[0].left || currentNode[0].right ) {
            if(currentNode[0].left) queue.push([currentNode[0].left,depth+1]);
            if(currentNode[0].right)queue.push([currentNode[0].right,depth+1]);
        }
    queue.shift();
    currentNode = queue[0];

    }
    return depth;
};
