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

//we need some way to keep track of the node and it's current level
//as well as the depth
//our procedure should be similar to BFS exept that we push the current level of the node
//into the stack as well
//however the depth is kept tract of by the depth of the current node we are own
//if our current node has children then we will push our the node and depth plus one onto the queue
// the max depth is the depth of the deepst node which we keep track of with the ternary statement
